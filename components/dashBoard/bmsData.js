import React from "react";
import Title from "./Title";
import { useAccountHistoryForBMS } from "../../utils/hooks/useAccountHistory";
import styles from "./dashBoard.module.css";
import { Table } from "react-bootstrap";
import { useBMStransaction } from "../../utils/hooks/useGetTransactions";
import {useState } from 'react';

export default function BMSData() {
  // const {bmsdata} = useAccountHistoryForBMS();
  const transactionInfo = useBMStransaction();
  const [isLoading, setIsLoading] = useState(false);
  // console.log('bmsdata -',bmsdata);
  console.log("transdata -", transactionInfo);

  return  (
    <React.Fragment>
      <Title>
        <h5 className={styles.title}>BMS Transactions</h5>
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
          
          {isLoading === false ? (
            <tr>
              <td className={styles.loadingContainer}></td>
              <td className={styles.loadingContainer}>
              <div className={styles.loading}><div></div><div></div><div></div><div></div></div>
              </td>
              <td className={styles.loadingContainer}></td>
              <td className={styles.loadingContainer}></td>
            </tr>
          ) : 
          (transactionInfo.map((row) => (
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
         
          )))}   
     <div className={styles.pagination}>
       <a href="#">Prev</a> <a href="#">next</a>
     </div>
  </tbody>
</Table>
    </React.Fragment>
  );
}
