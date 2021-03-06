import { useMemo, useState } from "react";
import dailyrocketabi from "../abis/dailyrocket.json";
import bmsabi from "../abis/bms.json";
import { useMoralisDapp } from "../../providers/MoralisDappProvider/MoralisDappProvider";

import { DAILYROCKETADDRESS, BMSADDRESS } from "../constants";

const abiDecoder = require("abi-decoder");
export function timeConverter(UNIX_timestamp) {
  const a = new Date(UNIX_timestamp * 1000);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  const hour = a.getHours();
  const min = a.getMinutes();
  const sec = a.getSeconds();
  return date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
}

export const useHistoryForDaily = () => {
  const { walletAddress } = useMoralisDapp();
  const [loading, setLoading] = useState(false);
  const [dailyhistorydata, setdailyhistorydata] = useState([]);

  abiDecoder.addABI(dailyrocketabi);
  function decodeInput(input) {
    return abiDecoder.decodeMethod(input);
  }

  useMemo(async () => {
    if (walletAddress) {
      setLoading(true);
      try {
        const uri = `https://api-kovan.etherscan.io/api?module=account&action=txlist&address=${DAILYROCKETADDRESS}&startblock=0
        &endblock=latest&sort=desc&apikey=1R83N7NU9TED47UB8HXSW696FGMFM6FQKJ`;
        const data = await fetch(uri);
        const jsondata = await data.json();
        const dailyrockettx = jsondata.result.filter(
          (item) => item.to == DAILYROCKETADDRESS
        );

        const dataFiltered = dailyrockettx
          .filter(
            (items) =>
              decodeInput(items.input) !== undefined && items.isError !== "1"
          )
          .map((items) => ({
            value: items.value,
            transactionObj: decodeInput(items.input).params,
            timestamp: items.timeStamp,
            transactionFee: items.gasPrice * items.gasUsed,
            hash: items.hash,
          }));

        const newarray = dataFiltered.filter(
          (data) => data.transactionObj.length !== 2
        );

        const userData = newarray.map((data) => ({
          asset: data.transactionObj[0].value,
          prediction: data.transactionObj[1].value,
          payment:
            data.transactionObj[2].value ===
            "0xff795577d9ac8bd7d90ee22b6c1703490b6512fd"
              ? "DAI"
              : null,
          time: timeConverter(data.timestamp),
          hash: data.hash,
        }));

        setdailyhistorydata(userData);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    } else {
      console.log("Connect wallet");
    }
  }, [walletAddress]);

  return { loading, dailyhistorydata };
};

export const useHistoryForBMS = () => {
  const { walletAddress } = useMoralisDapp();
  const [loading, setLoading] = useState(false);
  const [bmshistorydata, setbmshistorydata] = useState([]);

  abiDecoder.addABI(bmsabi);
  function decodeInput(input) {
    return abiDecoder.decodeMethod(input);
  }

  useMemo(async () => {
    if (walletAddress) {
      setLoading(true);
      try {
        const uri = `https://api-kovan.etherscan.io/api?module=account&action=txlist&address=${BMSADDRESS}&startblock=0
        &endblock=latest&sort=desc&apikey=1R83N7NU9TED47UB8HXSW696FGMFM6FQKJ`;
        const data = await fetch(uri);
        const jsondata = await data.json();
        const bmstx = jsondata.result.filter((item) => item.to == BMSADDRESS);

        const dataFiltered = bmstx
          .filter(
            (items) =>
              decodeInput(items.input) !== undefined && items.isError !== "1"
          )
          .map((items) => ({
            value: items.value,
            transactionObj: decodeInput(items.input).params,
            timestamp: items.timeStamp,
            transactionFee: items.gasPrice * items.gasUsed,
            hash: items.hash,
          }));

        const newarray = dataFiltered.filter(
          (data) => data.transactionObj.length === 3
        );

        const userData = newarray.map((data) => ({
          starttime: timeConverter(data.transactionObj[0].value),
          market: data.transactionObj[2].value,
          time: timeConverter(data.timestamp),
          hash: data.hash,
        }));

        console.log("userdatabms", userData);

        setbmshistorydata(userData);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    } else {
      console.log("Connect wallet");
    }
  }, [walletAddress]);

  return { loading, bmshistorydata };
};
