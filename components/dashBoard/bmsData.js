import React from "react";
import Title from "./Title";
import { useAccountHistoryForBMS} from "../../utils/hooks/useAccountHistory";
import styles from './dashBoard.module.css';
import { Table } from 'react-bootstrap';

export default function BMSData() {
    // const {bmsdata} = useAccountHistoryForBMS();
    const transactionInfo = useAccountHistoryForBMS();

    // console.log('bmsdata -',bmsdata);
    console.log('transdata -',transactionInfo)

  return (
    <React.Fragment>
      <Title><h5 className={styles.title}>BMS Transactions</h5></Title>
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
  {[transactionInfo[2]].map(row => (
            <tr className={styles.tr} key={row.id}>
              {/* <td className={styles.td}>{row.market}</td>
              <td className={styles.td}>{row.hash}</td> */}
              <td className={styles.td}>{row.isWinnner ? 'Won' : 'Lost'}</td>
              <td className={styles.td}>{row.time}</td>
              <td className={styles.td}>{row.startTime}</td>
              <td className={styles.td}>{row.endTime}</td>
            
            </tr>
         ))}   
    
  </tbody>
</Table>
    </React.Fragment>
  );
}
