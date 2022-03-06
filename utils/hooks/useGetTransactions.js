import { useMemo, useState } from "react";
import { useMoralis } from "react-moralis";
import DAILYROCKETABI from "../abis/dailyrocket.json";
import BMSABI from "../abis/bms.json";
import { DAILYROCKETADDRESS, BMSADDRESS } from "../constants";
import { useMoralisDapp } from "../../providers/MoralisDappProvider/MoralisDappProvider";
import { timeConverter } from "./useAccountHistory";

export const useDailyTransactions = () => {
  const { Moralis } = useMoralis();
  const [transactions, setTransactions] = useState([]);
  const { walletAddress } = useMoralisDapp();

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
    if (walletAddress) {
      try {
        const web3 = await Moralis.enableWeb3();
        const contract = new web3.eth.Contract(
          DAILYROCKETABI,
          DAILYROCKETADDRESS
        );
        const daycount = await contract.methods.dayCount().call();
        // const daycount = 1;
        const assetName = await contract.methods.assetName().call();
        const dayInfo = await contract.methods.dayAssetInfo(daycount).call();
        const betIdArray = await loopTransactions(
          arrayLength,
          contract,
          daycount
        );

        console.log("assetName", assetName);

        const bets = await loopId(daycount, betIdArray, contract, assetName);

        const formattedData = formatData(bets, dayInfo);

        setTransactions(formattedData);
      } catch (error) {
        console.log("transaction error", error);
      }
    }
  }, [walletAddress]);
  return transactions;
};

export const useBMStransaction = () => {
  const { Moralis } = useMoralis();
  const [transactions, setTransactions] = useState([]);
  const { walletAddress } = useMoralisDapp();

  const formatData = (transaction, roundInfo) => {
    let bets = [];
    console.log(transaction);
    for (let i = 0; i < transaction.length; i++) {
      const isWinner = transaction[i].isWinner;
      const date = timeConverter(transaction[i].timePlaced);
      const starttime = timeConverter(transaction[i].squareStartTime);
      const endtime = timeConverter(transaction[i].squareEndTime);
      const info = roundInfo.winningTime !== "0";

      bets.push({
        isWinner: isWinner,
        date: date,
        starttime: starttime,
        endtime: endtime,
        isRoundOver: info,
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
        bets.push(prediction);
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
        const web3 = await Moralis.enableWeb3();
        const contract = new web3.eth.Contract(BMSABI, BMSADDRESS);
        const coinRound = await contract.methods.coinRound().call();
        console.log("coinround", coinRound);
        const roundInfo = await contract.methods.roundInfo(coinRound).call();
        console.log(roundInfo);
        const betIdArray = await loopTransactions(
          arrayLength,
          contract,
          coinRound
        );

        const bets = await loopId(coinRound, betIdArray, contract);
        console.log(bets);

        const formattedData = formatData(bets, roundInfo);
        console.log("formatted data", formattedData);

        setTransactions(formattedData);
      } catch (error) {
        console.log("transaction error", error);
      }
    }
  }, [walletAddress]);
  return transactions;
};
