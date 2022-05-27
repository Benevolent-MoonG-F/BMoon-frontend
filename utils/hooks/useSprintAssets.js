import React, { useState, useMemo } from "react";
import { useLoneContract } from "./useContract";
import { SPRINT69 } from "../constants";
import SPRINT69ABI from "../abis/69sprint.json";

export const useSprintAssets = () => {
  const { Contract } = useLoneContract(SPRINT69ABI, SPRINT69);
  const [assets, setAssets] = useState([{}]);
  const [loading, setLoading] = useState(false);
  console.log("69", Contract);

  useMemo(async () => {
    setLoading(true);
    const AssetArray = [];
    for (let i = 1; i < 9; i++) {
      if (Contract) {
        const asset = await Contract.methods.s_assetIdentifier(i).call();
        console.log("asset69", asset);
        AssetArray.push({ assetNumber: i, asset });
      }
    }
    console.log(AssetArray);
    setAssets(AssetArray);
    setLoading(false);
  }, [Contract]);

  return { assets, loading };
};
