import { useState, useMemo } from "react";
import { useLoneContract } from "./useContract";
import factoryabi from "../abis/factory.json";
import { FACTORYADDRESS } from "../constants";

export const useGetAssetAddress = (symbol) => {
  const [address, setAddress] = useState("");

  useMemo(() => {
    try {
      const { Contract } = useLoneContract(factoryabi, FACTORYADDRESS);
      console.log("contract2", Contract);
    } catch (err) {
      console.log(err);
    }
  }, [symbol]);
};
