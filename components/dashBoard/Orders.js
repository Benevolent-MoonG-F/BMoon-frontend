import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import styles from './dashBoard.module.css';
// Generate Order Data
function createData(id, transaction, date, asset, gameType, closeDate, predictionPrice, paymentMethod) {
  return { id, transaction, date, asset, gameType, closeDate, predictionPrice, paymentMethod};
}
// the following is sample of the dashboard data 
const rows = [
  createData(
    0,
    "#123456789",
    "16 Mar, 2019",
    "Ethereum",
    "Daily Rocket",
    312.44,
    "18 Mar, 2019",
    "DAI", 
  ),
  createData(
    1,
    "#0fds123456789",
    "16 Mar, 2019",
    "Ethereum",
    "Moon Square",
    312.44,
    "18 Mar, 2019",
    "DAI", 
  ),
  createData(
    2,
    "#0f74t46789",
    "16 Mar, 2019",
    "Ethereum",
    "Moon Square",
    312.44,
    "8 Mar, 2019",
    "DAI", 
  ),
  createData(
    3,
    "#0f74t46789",
    "16 Mar, 2019",
    "Ethereum",
    "Daily Rocket",
    312.44,
    "18 Mar, 2019",
    "DAI", 
  ),
  createData(
    4,
    "#0f74t46789",
    "16 Mar, 2019",
    "Ethereum",
    "Moon Square",
    312.44,
    "18 Mar, 2019",
    "DAI", 
  )
];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>    
  <Title>Transactions</Title>
      {/* <Title> Recent Transactions</Title> */}
      <Table size="small">

        <TableHead>
          <TableRow className={styles.tr}>
            <TableCell className={styles.th}>Transaction</TableCell>
            <TableCell className={styles.th}>Date</TableCell>
            <TableCell className={styles.th}>Asset</TableCell>
            <TableCell className={styles.th}>Game</TableCell>
            <TableCell className={styles.th}>Close Date</TableCell>
            <TableCell className={styles.th}>Prediction Price</TableCell>
            <TableCell className={styles.th}>Payment Method</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id} className={styles.tr}>
              <TableCell className={styles.td}>{row.transaction}</TableCell>
              <TableCell className={styles.td}>{row.date}</TableCell>
              <TableCell className={styles.td}>{row.asset}</TableCell>
              <TableCell className={styles.td}>{row.gameType}</TableCell>
              <TableCell className={styles.td}>{row.predictionPrice}</TableCell>
              <TableCell className={styles.td}>{row.closeDate}</TableCell>
              <TableCell className={styles.td} >{row.paymentMethod}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="javascript:;">
          View More
        </Link>
      </div>


    </React.Fragment>
  );
}
