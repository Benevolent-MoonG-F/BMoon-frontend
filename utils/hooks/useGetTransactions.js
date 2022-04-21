import { useMemo, useState } from "react";
import { useMoralis } from "react-moralis";
import DAILYROCKETABI from "../abis/dailyrocket.json";
import BMSABI from "../abis/bms.json";
import { DAILYROCKETADDRESS, BMSADDRESS } from "../constants";
import { useMoralisDapp } from "../../providers/MoralisDappProvider/MoralisDappProvider";
import { timeConverter } from "./useAccountHistory";
import { useGetAssetAddress } from "./useGetAssetAddress";
import { useSelector } from "react-redux";

export const useDailyTransactions = (
  dailyCountNumber,
  dailyClicked,
  DayCount,
  countToBeSubtracted,
  AssetAddress,
  assetChanged
) => {
  const { Moralis } = useMoralis();
  const [transactions, setTransactions] = useState([]);
  // const [dayCount, setDayCount] = useState(0);
  const { walletAddress } = useMoralisDapp();
  const [loading, setLoading] = useState(true);
  const DAYCOUNT = useSelector((state) => state.app.dayCount);

  const formatData = (transaction, dayInfo) => {
    let bets = [];
    for (let i = 0; i < transaction.length; i++) {
      const isWinner = transaction[i].prediction.isWinner;
      const isPaid = transaction[i].prediction.paid;
      const date = timeConverter(transaction[i].prediction.time);
      const prediction = transaction[i].prediction.prediction;
      const betId = transaction[i].betId;
      const dayCount = transaction[i].dayCount;
      const assetName = transaction[i].assetName;
      const info = dayInfo.closePrice !== "0";

      bets.push({
        isWinner: isWinner,
        date: date,
        prediction: prediction,
        isRoundOver: info,
        betId: betId,
        dayCount: dayCount,
        assetName: assetName,
        DailyRocket: true,
        isPaid: isPaid,
      });
    }

    return bets;
  };

  const loopTransactions = async (count, contract, dayCount) => {
    const betIdObject = [];
    for (let i = 0; i < count; i++) {
      try {
        const addressbets = await contract.methods
          .addressBets(dayCount, walletAddress, i)
          .call();
        betIdObject.push(addressbets);
      } catch (err) {
        console.log(err);
      }
    }
    return betIdObject;
  };

  const loopId = async (dayCount, betIdArray, contract, assetName) => {
    const bets = [];

    for (let i = 0; i < betIdArray.length; i++) {
      try {
        const prediction = await contract.methods
          .dayBetIdInfo(dayCount, betIdArray[i])
          .call();
        bets.push({
          prediction,
          betId: betIdArray[i],
          dayCount: dayCount,
          assetName: assetName,
        });
      } catch (err) {
        console.log(err);
      }
    }

    return bets;
  };

  useMemo(async () => {
    let arrayLength = 5;
    console.log("forward clicked");
    if (walletAddress) {
      console.log("contract2", AssetAddress);
      try {
        // setIsLoading(true);
        console.log("assetChanged2", DAYCOUNT);
        setLoading(true);
        console.log("to-be-sub", countToBeSubtracted);
        const web3 = await Moralis.enableWeb3();
        const contract = await new web3.eth.Contract(
          DAILYROCKETABI,
          AssetAddress
        );
        console.log("dayCount", contract);
        const name = await contract.methods.assetName().call();
        console.log("dayCount", countToBeSubtracted);
        // const daycount = await contract.methods.dayCount().call();
        const daycount = DAYCOUNT;
        console.log("dayCount", daycount);
        // const daycount = currentDay - countToBeSubtracted;

        const assetName = await contract.methods.assetName().call();
        const dayInfo = await contract.methods.dayAssetInfo(daycount).call();
        const betIdArray = await loopTransactions(
          arrayLength,
          contract,
          daycount
        );

        console.log("assetName", betIdArray);

        const bets = await loopId(daycount, betIdArray, contract, assetName);

        const formattedData = formatData(bets, dayInfo);

        console.log("assetName", formattedData);

        setTransactions(formattedData);
        setLoading(false);
      } catch (error) {
        console.log("transaction error", error);
        setLoading(false);
      }
    }
  }, [
    walletAddress,
    DAYCOUNT,
    dailyClicked,
    dailyCountNumber,
    DayCount,
    countToBeSubtracted,
    AssetAddress,
    assetChanged,
  ]);
  return { transactions, loading };
};

export const useBMStransaction = (
  setLoading,
  countToBeSubtracted,
  AssetAddress
) => {
  const { Moralis } = useMoralis();
  const [transactions, setTransactions] = useState([]);
  const { walletAddress } = useMoralisDapp();

  const formatData = (transaction, roundInfo, coinRound, assetName) => {
    let bets = [];
    console.log(transaction);
    for (let i = 0; i < transaction.length; i++) {
      console.log("squareStartTime", transaction[i]);
      const isWinner = transaction[i].isWinner;
      const date = timeConverter(transaction[i].timePlaced);
      const starttime = timeConverter(transaction[i].squareStartTime);
      const endtime = timeConverter(transaction[i].squareEndTime);
      const betId = transaction[i].betId;
      const dayCount = coinRound;

      const info = roundInfo.winningTime !== "0";

      bets.push({
        isWinner: isWinner,
        date: date,
        starttime: starttime,
        endtime: endtime,
        isRoundOver: info,
        betId,
        dayCount,
        assetName,
        DailyRocket: false,
      });
    }

    return bets;
  };

  const loopTransactions = async (count, contract, roundId) => {
    const betIdObject = [];
    for (let i = 0; i < count; i++) {
      try {
        const addressbets = await contract.methods
          .roundAddressBetIds(roundId, walletAddress, i)
          .call();
        betIdObject.push(addressbets);
      } catch (err) {
        console.log(err);
      }
    }
    return betIdObject;
  };

  const loopId = async (coinRound, betIdArray, contract) => {
    const bets = [];

    for (let i = 0; i < betIdArray.length; i++) {
      try {
        const prediction = await contract.methods
          .roundIdBetInfo(coinRound, betIdArray[i])
          .call();
        bets.push({ ...prediction, betId: betIdArray[i] });
      } catch (err) {
        console.log(err);
      }
    }

    return bets;
  };

  useMemo(async () => {
    let arrayLength = 5;
    if (walletAddress) {
      try {
        setLoading(true);
        const web3 = await Moralis.enableWeb3();
        // console.log("bmsAddress", AssetAddress);
        const contract = new web3.eth.Contract(BMSABI, AssetAddress);
        const coinRound = await contract.methods.coinRound().call();
        const assetName = await contract.methods.assetName().call();
        console.log("coinround", assetName);
        const roundInfo = await contract.methods.roundInfo(coinRound).call();
        console.log(roundInfo);
        const betIdArray = await loopTransactions(
          arrayLength,
          contract,
          coinRound
        );

        const bets = await loopId(coinRound, betIdArray, contract);

        const formattedData = formatData(bets, roundInfo, coinRound, assetName);
        console.log("formatted data", formattedData);

        setTransactions(formattedData);
        setLoading(false);
      } catch (error) {
        console.log("transaction error", error);
        setLoading(false);
      }
    }
  }, [walletAddress, countToBeSubtracted, AssetAddress]);
  return { transactions };
};
