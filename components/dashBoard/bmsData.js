import React from "react";
import Title from "./Title";
import { useAccountHistoryForBMS } from "../../utils/hooks/useAccountHistory";
import styles from "./dashBoard.module.css";
import { Table } from "react-bootstrap";
import { useBMStransaction } from "../../utils/hooks/useGetTransactions";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { topAssets } from "../multiStepForm/assetData";
import Image from "next/image";
// import { useState } from "react";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function BMSData() {
  // const {bmsdata} = useAccountHistoryForBMS();

  const [isLoading, setLoading] = useState(false);

  const transactionInfo = useBMStransaction(setLoading);
  // console.log('bmsdata -',bmsdata);
  console.log("transdata -", transactionInfo);

  console.log("isLoadinggg", isLoading);

  // Define components
  const assetComponent = (
    <div className={`${styles.assetWrapper} container-fluid`}>
      <div className={`${styles.assetWrapper}`}>
        <h5>
          <b>Select Asset</b>
        </h5>
        <select>
          {topAssets.map((asset) => (
            <option value={asset.symbol}>{asset.label}</option>
          ))}
        </select>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <Title>
        <div className='asset-data'>{assetComponent}</div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h5 className={styles.title}>BMS Transactions</h5>
          <div className={styles.pagination}>
            <a href='#'>
              {" "}
              <FaAngleLeft className={styles.icon} />
            </a>{" "}
            <a href='#'>
              {" "}
              <FaAngleRight className={styles.icon} />
            </a>
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
                <td className={styles.td}>
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
