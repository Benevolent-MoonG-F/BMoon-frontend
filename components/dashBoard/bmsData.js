import React, { useState, useMemo, useCallback, useEffect } from "react";
import Title from "./Title";
import { useAccountHistoryForBMS } from "../../utils/hooks/useAccountHistory";
import styles from "./dashBoard.module.css";
import { Table } from "react-bootstrap";
import { useBMStransaction } from "../../utils/hooks/useGetTransactions";

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
// import { useState } from "react";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function BMSData({ Contract }) {
  // const {bmsdata} = useAccountHistoryForBMS();
  const [AssetAddress, setAssetAddress] = useState("");
  const [value, setValue] = useState("BTC");
  const [countToBeSubtracted, setCountToBeSubtrated] = useState(0);
  const [BmsCount, setBmsCount] = useState(5);

  const [isLoading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const { Moralis } = useMoralis();

  const ROUND = useSelector((state) => state.app.msCount);
  const MAXROUND = useSelector((state) => state.app.MaxMsCount);

  const transactionInfo = useBMStransaction(
    setLoading,
    countToBeSubtracted,
    AssetAddress
  );

  useEffect(() => {
    const update = async () => {
      try {
        const web3 = await Moralis.enableWeb3();
        const contract = new web3.eth.Contract(msabi, AssetAddress);
        const coinround = await contract.methods.coinRound().call();
        dispatch(updateMsCount({ msCount: parseInt(coinround) }));
      } catch (err) {
        console.log(err);
      }
    };
    update();
  }, [AssetAddress]);

  // Define components
  const assetComponent = (
    <div className={`${styles.assetWrapper} container-fluid`}>
      <div className={`${styles.assetWrapper}`}>
        <h5>
          <b>Select Asset</b>
        </h5>
        <select
          onChange={(e) => setValue(e.target.value)}
          className={styles.selectBtn}
        >
          {topAssets.map((asset) => (
            <option key={asset.label} value={asset.symbol}>
              {asset.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );

  const handleForwardButton = () => {
    // if(dayCount + 1 > )
    if (ROUND < MAXROUND) {
      dispatch(addRound({}));
    }
  };

  const handleBackwardButton = useCallback(() => {
    if (ROUND !== 1) {
      dispatch(removeRound({}));
    }
  }, [dispatch]);

  const assetAddress = useMemo(async () => {
    try {
      console.log("contract2", value);
      const address = await Contract.methods.getMSAddress(value).call();

      setAssetAddress(address);
    } catch (err) {
      console.log(err);
    }
  }, [Contract, value]);

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
        <div className='asset-data'>{assetComponent}</div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h5 className={styles.title}>BMS Transactions</h5>
          <div className={styles.pagination}>
            <div>
              {" "}
              <FaAngleLeft
                onClick={() => handleBackwardButton()}
                className={ROUND === 1 ? styles.disabled : styles.icon}
              />
            </div>
            <div>
              {" "}
              <FaAngleRight
                onClick={() => handleForwardButton()}
                className={ROUND === MAXROUND ? styles.disabled : styles.icon}
              />
            </div>
          </div>
        </div>
      </Title>
      <Table striped hover responsive className={styles.table}>
        <thead>
          <tr className={styles.tr}>
            {/* <th className={styles.th}>Asset</th>
            <th className={styles.th}>Hash</th> */}
            <th className={styles.th}>Status</th>
            <th className={styles.th}>Time</th>
            <th className={styles.th}>Start Time</th>
            <th className={styles.th}>End Time</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {isLoading ? (
            <tr>
              <td className={styles.loadingContainer} colSpan='5'>
                <div className={styles.loading}>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </td>
            </tr>
          ) : (
            transactionInfo.transactions.map((row) => (
              <tr className={styles.tr} key={row.id}>
                {/* <td className={styles.td}>{row.market}</td>
              <td className={styles.td}>{row.hash}</td> */}
                <td
                  onClick={
                    row.isWinner && !row.isPaid
                      ? () =>
                          showClaimModal(
                            row.isWinner,
                            row.isRoundOver,
                            row.betId,
                            row.dayCount,
                            row.assetName,
                            row.DailyRocket
                          )
                      : null
                  }
                  style={{
                    cursor: "pointer",
                  }}
                  className={styles.td}
                >
                  {row.isWinnner && row.isRoundOver
                    ? "Won"
                    : !row.isWinnner && !row.isRoundOver
                    ? "Pending"
                    : "Lost"}
                </td>
                <td className={styles.td}>{row.date}</td>
                <td className={styles.td}>{row.starttime}</td>
                <td className={styles.td}>{row.endtime}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </React.Fragment>
  );
}
