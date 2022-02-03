import React, { useMemo, useState } from "react";
import { useMoralis } from "react-moralis";
import daiabi from "../abis/dai.json";
import { useMoralisDapp } from "../../providers/MoralisDappProvider/MoralisDappProvider";

export const useAllowance = (reload) => {
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
          "0xff795577d9ac8bd7d90ee22b6c1703490b6512fd"
        );
        const dailyallowance = await contract.methods
          .allowance(
            walletAddress,
            "0xb0A1157854279D0f309Df6a92486293B3B899330"
          )
          .call();
        const bmsallowance = await contract.methods
          .allowance(
            walletAddress,
            "0x982F0f5e1192A4627d6a1acF4e151497253819Af"
          )
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
  }, [walletAddress, reload]);
  return { isDailyApproved, isBmsApproved };
};
