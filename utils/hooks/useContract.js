import React, { useMemo, useState } from "react";
import { useMoralis } from "react-moralis";
import daiabi from "../abis/dai.json";

export const useContract = (abi, address, bmsabi, bmsaddress) => {
  const { Moralis } = useMoralis();
  const [contract, setContract] = useState(null);
  const [bmscontract, setBmsContract] = useState(null);
  useMemo(async () => {
    try {
      const web3 = await Moralis.enableWeb3();
      const contract = new web3.eth.Contract(abi, address);
      const bmscontract =
        bmsabi && bmsaddress ? new web3.eth.Contract(bmsabi, bmsaddress) : "";
      setContract(contract);
      setBmsContract(bmscontract);
      console.log(contract);
    } catch (err) {
      console.log(err);
    }
  }, [Moralis, abi, address, bmsabi, bmsaddress]);

  return { contract, bmscontract };
};

export const useLoneContract = (abi, address) => {
  const { Moralis } = useMoralis();
  const [Contract, setContract] = useState(null);
  useMemo(async () => {
    try {
      const web3 = await Moralis.enableWeb3();
      const contract = new web3.eth.Contract(abi, address);
      setContract(contract);
    } catch (err) {
      console.log(err);
    }
  }, [Moralis, abi, address]);

  return { Contract };
};

export const getERC20Token = async (address) => {
  const web3 = await Moralis.enableWeb3();
  const token = new web3.eth.Contract(daiabi, address);
  return token;
};
