import { useMemo, useState } from "react";
import { useMoralis } from "react-moralis";
import DAILYROCKETABI from "../abis/dailyrocket.json";
import { DAILYROCKETADDRESS } from "../constants";
import { useMoralisDapp } from "../../providers/MoralisDappProvider/MoralisDappProvider";
import { timeConverter } from "./useAccountHistory";

export const useDailyTransactions = () => {
  const { Moralis } = useMoralis();
  const [transactions, setTransactions] = useState([]);
  const { walletAddress } = useMoralisDapp();

  const formatData = (transaction) => {
    const isWinner = transaction.isWinner;
    const date = timeConverter(transaction.time);
    const prediction = parseFloat(transaction.prediction) / 10 ** 8;

    return { isWinner: isWinner, date: date, prediction: prediction };
  };

  useMemo(async () => {
    if (walletAddress) {
      try {
        const web3 = await Moralis.enableWeb3();
        const contract = new web3.eth.Contract(
          DAILYROCKETABI,
          DAILYROCKETADDRESS
        );
        const daycount = await contract.methods.dayCount().call();
        const transaction = await contract.methods
          .dayAssetUserPrediction(daycount, "BTC", walletAddress)
          .call();
        const formattedData = formatData(transaction);
        setTransactions(formattedData);
      } catch (error) {
        console.log("transaction error", error);
      }
    }
  }, [walletAddress]);
  return [transactions];
};
