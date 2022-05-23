import { useMemo, useState } from "react";
import { useLoneContract } from "./useContract";
import factory from "../abis/factory.json";

export const useFactoryForDaily = (symbol) => {
  const [address, setAddress] = useState("");
  const { Contract } = useLoneContract(
    factory,
    "0xF4448B8DdB375774BEC412C47624EC0C4CCBC202"
  );

  useMemo(async () => {
    if (symbol) {
      try {
        console.log("factory1", Contract);
        const Address = await Contract.methods.getDRAddress(symbol).call();

        console.log("address", Address);
      } catch (err) {
        console.log("err", err);
      }
    }
  }, [symbol]);
};

export const useFactoryForMs = () => {};
