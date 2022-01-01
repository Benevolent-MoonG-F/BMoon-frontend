import React, { useMemo, useState } from 'react';
import { useMoralis } from 'react-moralis';

export const useContract = (abi, address, bmsabi, bmsaddress) => {
  const { Moralis } = useMoralis();
  const [contract, setContract] = useState(null);
  const [bmscontract, setBmsContract] = useState(null);
  useMemo(async () => {
    const web3 = await Moralis.enableWeb3();
    const contract = new web3.eth.Contract(abi, address);
    const bmscontract = new web3.eth.Contract(bmsabi, bmsaddress);
    setContract(contract);
    setBmsContract(bmscontract);
    console.log(contract);
  }, [Moralis, abi, address, bmsabi, bmsaddress]);

  return { contract, bmscontract };
};
