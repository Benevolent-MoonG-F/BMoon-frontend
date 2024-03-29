import React, { useMemo, useState } from "react";
import { useMoralis } from "react-moralis";
import daiabi from "../abis/dai.json";
import { useMoralisDapp } from "../../providers/MoralisDappProvider/MoralisDappProvider";
import { BMSADDRESS, DAILYROCKETADDRESS } from "../constants";
import { useLoneContract } from "./useContract";
import { ethers } from "ethers";

export const useAllowance = (reload, bmsaddress, dailyrocketbms) => {
  const { Moralis } = useMoralis();
  const [isDailyApproved, setisdailyApproved] = useState(false);
  const [isBmsApproved, setisBMSApproved] = useState(false);
  const { walletAddress } = useMoralisDapp();

  useMemo(async () => {
    if (walletAddress) {
      try {
        const minimum = 10 * 10 ** 18;
        const web3 = await Moralis.enableWeb3();
        const contract = new web3.eth.Contract(
          daiabi,
          "0x001B3B4d0F3714Ca98ba10F6042DaEbF0B1B7b6F"
        );
        const dailyallowance = await contract.methods
          .allowance(walletAddress, dailyrocketbms)
          .call();
        const bmsallowance = await contract.methods
          .allowance(walletAddress, bmsaddress)
          .call();
        const dailyapproval =
          dailyallowance >= minimum.toString() ? true : false;
        const bmsapproval = bmsallowance >= minimum.toString() ? true : false;

        setisdailyApproved(dailyapproval);
        setisBMSApproved(bmsapproval);
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("not running");
    }
  }, [walletAddress, reload, bmsaddress, dailyrocketbms]);
  return { isDailyApproved, isBmsApproved };
};

export const useTokenAllowance = (address, abi, spender, reload, setReload) => {
  const { Contract } = useLoneContract(abi, address);
  const { walletAddress } = useMoralisDapp();
  const [enoughAllowance, setEnoughAllowance] = useState(false);

  useMemo(async () => {
    try {
      const minimumTokenAmount = ethers.utils.parseEther("10");
      const allowance = await Contract.methods
        .allowance(walletAddress, spender)
        .call();
      console.log(allowance.toString());
      const isEnough =
        ethers.utils.formatEther(allowance.toString()) < "10" ? false : true;

      setEnoughAllowance(isEnough);
      setReload(false);
    } catch (err) {
      console.log(err);
    }
  }, [Contract, walletAddress, reload]);

  return { enoughAllowance };
};
