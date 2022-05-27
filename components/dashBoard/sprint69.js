import React, { useState, useMemo, useCallback, useEffect } from "react";
import Title from "./Title";
import { useAccountHistoryForBMS } from "../../utils/hooks/useAccountHistory";
import styles from "./dashBoard.module.css";
import { Table } from "react-bootstrap";
import {
  useBMStransaction,
  useSprintTransactions,
} from "../../utils/hooks/useGetTransactions";
import { SPRINT69, SPRINTTOKEN } from "../../utils/constants";
import { SPRINT69ABI } from "../../utils/abis/69sprint.json";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { topAssets } from "../multiStepForm/assetData";
import Image from "next/image";
import { useMoralis } from "react-moralis";
import msabi from "../../utils/abis/bms.json";
import { updateMsCount, addRound, removeRound } from "../../state/app/action";
import { useDispatch, useSelector } from "react-redux";
import { addClaim } from "../../state/claim/action";
import { useLoneContract } from "../../utils/hooks/useContract";
import { useMoralisDapp } from "../../providers/MoralisDappProvider/MoralisDappProvider";
// import { useState } from "react";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function Sprint() {
  // const {bmsdata} = useAccountHistoryForBMS();
  const [AssetAddress, setAssetAddress] = useState("");
  const [value, setValue] = useState("BTC");
  const [countToBeSubtracted, setCountToBeSubtrated] = useState(0);
  const [BmsCount, setBmsCount] = useState(5);
  const { Contract } = useLoneContract(SPRINT69ABI, SPRINT69);
  const { walletAddress } = useMoralisDapp();

  const [isLoading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const { Moralis } = useMoralis();

  const { transactions, loading } = useSprintTransactions();

  const claim = async (round) => {
    const tx = await Contract.methods.claimWinning(round).send({
      from: walletAddress,
    });
    location.reload();
  };

  console.log("69t", transactions);

  //   const ROUND = useSelector((state) => state.app.msCount);
  //   const MAXROUND = useSelector((state) => state.app.MaxMsCount);

  //   const transactionInfo = useBMStransaction(
  //     setLoading,
  //     countToBeSubtracted,
  //     AssetAddress
  //   );

  //   useEffect(() => {
  //     const update = async () => {
  //       try {
  //         const web3 = await Moralis.enableWeb3();
  //         const contract = new web3.eth.Contract(msabi, AssetAddress);
  //         const coinround = await contract.methods.coinRound().call();
  //         dispatch(updateMsCount({ msCount: parseInt(coinround) }));
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     };
  //     update();
  //   }, [AssetAddress]);

  // Define components

  //   const handleForwardButton = () => {
  //     if (ROUND < MAXROUND) {
  //       dispatch(addRound({}));
  //     }
  //   };

  //   const handleBackwardButton = useCallback(() => {
  //     if (ROUND !== 1) {
  //       dispatch(removeRound({}));
  //     }
  //   }, [dispatch]);

  //   const assetAddress = useMemo(async () => {
  //     try {
  //       console.log("contract2", value);
  //       const address = await Contract.methods.getMSAddress(value).call();

  //       setAssetAddress(address);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }, [Contract, value]);

  // console.log("bmsAddress", AssetAddress);

  const showClaimModal = useCallback(
    (isWinner, isRoundOver, betId, dayCount, assetName, DailyRocket) => {
      if (isWinner && isRoundOver) {
        dispatch(
          addClaim({
            open: true,
            betId: betId,
            dayCount,
            assetName,
            DailyRocket,
          })
        );
      }
    },
    [dispatch]
  );

  return (
    <React.Fragment>
      <Title>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h5 className={styles.title}>Sprint69 Transactions</h5>
          <div className={styles.pagination}>
            <div>
              {" "}
              <FaAngleLeft
              // onClick={() => handleBackwardButton()}
              // className={ROUND === 1 ? styles.disabled : styles.icon}
              />
            </div>
            <div>
              {" "}
              <FaAngleRight
              // onClick={() => handleForwardButton()}
              // className={ROUND === MAXROUND ? styles.disabled : styles.icon}
              />
            </div>
          </div>
        </div>
      </Title>
      <Table striped hover responsive className={styles.table}>
        <thead>
          <tr className={styles.tr}>
            <th className={styles.th}>Status</th>
            <th className={styles.th}>Prediction</th>
            {/* <th className={styles.th}>Date</th> */}
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {loading ? (
            <tr>
              <td className={styles.loadingContainer} colSpan='5'>
                <div className={styles.loading}>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </td>
            </tr>
          ) : (
            <tr className={styles.tr}>
              <td
                style={{
                  cursor: "pointer",
                }}
                className={styles.td}
                onClick={
                  transactions.status === "Won"
                    ? () => claim(transactions.round)
                    : null
                }
              >
                {transactions.status === "pending" ? "pending" : "Won"}
              </td>
              <td className={styles.td}>
                {transactions.assets &&
                  `${transactions?.assets[0]} - ${transactions?.assets[1]} - ${transactions?.assets[2]} - ${transactions?.assets[3]}`}
              </td>
              <td className={styles.td}></td>
              <td className={styles.td}></td>
            </tr>
          )}
        </tbody>
      </Table>
    </React.Fragment>
  );
}
