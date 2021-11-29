import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(id, transaction, date, asset, gameType, closeDate, predictionPrice, paymentMethod) {
  return { id, transaction, date, asset, gameType, closeDate, predictionPrice, paymentMethod};
}

const rows = [
  createData(
    0,
    "#123456789",
    "16 Mar, 2019",
    "Etherium",
    "Daily Rocket",
    312.44,
    "18 Mar, 2019",
    "USDC", 
  ),
  createData(
    1,
    "#0fds123456789",
    "16 Mar, 2019",
    "Etherium",
    "Moon Square",
    312.44,
    "18 Mar, 2019",
    "Tera", 
  ),
  createData(
    2,
    "#0f74t46789",
    "16 Mar, 2019",
    "Etherium",
    "Moon Square",
    312.44,
    "8 Mar, 2019",
    "USDC", 
  ),
  createData(
    3,
    "#0f74t46789",
    "16 Mar, 2019",
    "Etherium",
    "Daily Rocket",
    312.44,
    "18 Mar, 2019",
    "USDC", 
  ),
  createData(
    4,
    "#0f74t46789",
    "16 Mar, 2019",
    "Etherium",
    "Moon Square",
    312.44,
    "18 Mar, 2019",
    "USDC", 
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
      <Title> Recent Transactions</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Transaction</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Asset</TableCell>
            <TableCell>Game</TableCell>
            <TableCell>Close Date</TableCell>
            <TableCell>Prediction Price</TableCell>
            <TableCell>Payment Method</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.transaction}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.asset}</TableCell>
              <TableCell>{row.gameType}</TableCell>
              <TableCell>{row.predictionPrice}</TableCell>
              <TableCell>{row.closeDate}</TableCell>
              <TableCell >{row.paymentMethod}</TableCell>
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
