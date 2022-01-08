import React from "react";
import Link from "@material-ui/core/Link";
import Title from "./Title";
import { useAccountHistoryForBMS,useAccountTransaction } from "../../utils/hooks/useAccountHistory";
import styles from './dashBoard.module.css';
import { Table } from 'react-bootstrap';

export default function BMSData() {
    const {bmsdata} = useAccountHistoryForBMS();
    console.log('bmsdata -',bmsdata)

  return (
    <React.Fragment>
      <Title><h5 className={styles.title}>BMS Transactions</h5></Title>
      <Table striped hover responsive className={styles.table}>
  <thead>
    <tr className={styles.tr}>
            <th className={styles.th}>Asset</th>
            <th className={styles.th}>Hash</th>
            <th className={styles.th}>Payment Method</th>
            <th className={styles.th}>Time</th>
            <th className={styles.th}>Start Time</th>
            <th className={styles.th}>End Time</th>
    </tr>
  </thead>
  <tbody className={styles.tableBody}>
  {bmsdata && bmsdata.map(row => (
            <tr className={styles.tr} key={row.id}>
              <td className={styles.td}>{row.market}</td>
              <td className={styles.td}>{row.hash}</td>
              <td className={styles.td}>{row.payment}</td>
              <td className={styles.td}>{row.time}</td>
              <td className={styles.td}>{row.starttime}</td>
              <td className={styles.td}>{}</td>
            
            </tr>
         ))}   
    
  </tbody>
</Table>




      {/* <Table size="small" className={styles.table}>
        <TableHead>
          <TableRow className={styles.tr}>
            <TableCell className={styles.th}>Asset</TableCell>
            <TableCell className={styles.th}>Hash</TableCell>
            <TableCell className={styles.th}>Payment Method</TableCell>
            <TableCell className={styles.th}>Time</TableCell>
            <TableCell className={styles.th}>Start Time</TableCell>
            <TableCell className={styles.th}>End Time</TableCell>
          
            
          </TableRow>
        </TableHead>
        <TableBody className={styles.tableBody}>
        {bmsdata && bmsdata.map(row => (
            <TableRow className={styles.tr} key={row.id}>
              <TableCell className={styles.td}>{row.market}</TableCell>
              <TableCell className={styles.td}>{row.hash}</TableCell>
              <TableCell className={styles.td}>{row.payment}</TableCell>
              <TableCell className={styles.td}>{row.time}</TableCell>
              <TableCell className={styles.td}>{row.starttime}</TableCell>
              <TableCell className={styles.td}>{}</TableCell>
            
            </TableRow>
         ))}   
        
        </TableBody>
      </Table> */}
     
    </React.Fragment>
  );
}
