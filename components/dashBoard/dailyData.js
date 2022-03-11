import React, { useState, useCallback } from "react";
import Link from "@material-ui/core/Link";
import Title from "./Title";
import { useDailyTransactions } from "../../utils/hooks/useGetTransactions";
import styles from "./dashBoard.module.css";
import { Table } from "react-bootstrap";
import ClaimModal from "./modals/ClaimModal";
import { addClaim } from "../../state/claim/action";
import { useDispatch } from "react-redux";
import { FaAngleLeft, FaAngleRight} from 'react-icons/fa';



export default function DailyData() {
  const transactions = useDailyTransactions();
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  console.log("dailydata -", transactions);
  const dispatch = useDispatch();

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
    <React.Fragment className={styles.divide}>
      <Title>
        <h5 className={styles.title}>DailyRocket Transactions</h5>
      </Title>
      <Table striped hover responsive className={styles.table}>
        <thead>
          <tr className={styles.tr}>
            {/* <th className={styles.th}>Asset</th> */}
            {/* <th className={styles.th}>Hash</th> */}
            <th className={styles.th}>Status</th>
            <th className={styles.th}>Prediction</th>
            <th className={styles.th}>Date</th>
             
            <div className={styles.pagination}>
                <a href="#"> <FaAngleLeft className={styles.icon} /></a> <a href="#"> <FaAngleRight className={styles.icon} /></a>
              </div>
    
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {!isLoading ? (
            <tr>
            <td className={styles.loadingContainer} colSpan="4">
            <div className={styles.loading}><div></div><div></div><div></div><div></div></div>
          
            </td>
            
          </tr>
          )
          :
          (transactions.map((row) => (
            <tr className={styles.tr} key={row.id}>
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
                {row.isWinner && row.isPaid
                  ? "Paid"
                  : row.isWinner && row.isRoundOver
                  ? "Won"
                  : !row.isWinner && !row.isRoundOver
                  ? "Pending"
                  : "Lost"}
              </td>
              <td className={styles.td}>{row.prediction}</td>
              <td className={styles.td}>{row.date}</td>
            </tr>
          )))}   
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
