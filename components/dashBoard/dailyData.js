import React from "react";
import Link from "@material-ui/core/Link";
import Title from "./Title";
import {useDailyTransactions} from "../../utils/hooks/useGetTransactions";
import styles from './dashBoard.module.css';
import { Table } from 'react-bootstrap';

export default function DailyData() {
    const transactions = useDailyTransactions();
    console.log('dailydata -',transactions);

  return (
    <React.Fragment className={styles.divide}>
      <Title><h5 className={styles.title}>DailyRocket Transactions</h5></Title>
      <Table striped hover responsive className={styles.table}>
  <thead>
    <tr className={styles.tr}>
            {/* <th className={styles.th}>Asset</th> */}
            {/* <th className={styles.th}>Hash</th> */}
            <th className={styles.th}>Status</th>
            <th className={styles.th}>Prediction</th>
            <th className={styles.th}>Date</th>
           
    </tr>
  </thead>
  <tbody className={styles.tableBody}>
  { transactions.map(row => (
            <tr className={styles.tr} key={row.id}>
              {/* <td className={styles.td}>{row.asset}</td> */}
              {/* <td className={styles.td}>{row.hash}</td> */}
              <td className={styles.td}>{row.isWinner ? 'Won' : 'Lost'}</td>
              <td className={styles.td}>{row.prediction}</td>
              <td className={styles.td}>{row.date}</td>         
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
            <TableCell className={styles.th}>Prediction</TableCell>
            <TableCell className={styles.th}>Time</TableCell>
          
            
          </TableRow>
        </TableHead>
        <TableBody className={styles.tableBody}>
        {dailydata && dailydata.map(row => (
            <TableRow className={styles.tr} key={row.id}>
              <TableCell className={styles.td}>{row.asset}</TableCell>
              <TableCell className={styles.td}>{row.hash}</TableCell>
              <TableCell className={styles.td}>{row.payment}</TableCell>
              <TableCell className={styles.td}>{row.prediction}</TableCell>
              <TableCell className={styles.td}>{row.time}</TableCell>
            
            </TableRow>
         ))}   
        
        </TableBody>
      </Table> */}
      
    </React.Fragment>
  );
}
