import React, { useState, useCallback } from "react";
import Link from "@material-ui/core/Link";
import Title from "./Title";
import { useDailyTransactions } from "../../utils/hooks/useGetTransactions";
import styles from "./dashBoard.module.css";
import { Table } from "react-bootstrap";
import ClaimModal from "./modals/ClaimModal";
import { addClaim } from "../../state/claim/action";
import { useDispatch } from "react-redux";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { topAssets } from "../multiStepForm/assetData";
import Image from "next/image";
import {
  FormControl,
  InputLabel,
  NativeSelect,
  styled,
  InputBase,
} from "@material-ui/core";

// export default function DailyData() {
//   const transactions = useDailyTransactions();
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function DailyData({
  dailyCountNumber,
  setDailyCount,
  setDailyClicked,
  dailyClicked,
}) {
  const [open, setOpen] = useState(false);

  const [count, setCount] = useState(0);
  const [DayCount, setDayCount] = useState(5);
  const [countToBeSubtracted, setCountToBeSubtrated] = useState(0);
  const [value, setValue] = useState("");

  const { transactions, loading } = useDailyTransactions(
    dailyCountNumber,
    dailyClicked,
    DayCount,
    countToBeSubtracted
  );

  console.log("dailydata -", transactions);
  const dispatch = useDispatch();

  console.log("value", value);

  // Define components
  const assetComponent = (
    <div className={`${styles.assetWrapper} container-fluid`}>
      <div className={`${styles.assetWrapper}`}>
        <h5>
          <b>Select Asset</b>
        </h5>
        <Autocomplete
          className={`${styles.box1} mx-auto`}
          value={topAssets[0]}
          onChange={(e) => setValue(e.target.value)}
          id='asset-select'
          sx={{ width: "200px", mx: "20px" }}
          // autoHighlight
          options={topAssets}
          getOptionLabel={(option) => option.label}
          renderOption={(props, option) => (
            <Box
              component='li'
              sx={{ "& > div": { mr: 3, flexShrink: 0 } }}
              {...props}
            >
              <div>
                <Image
                  //   loading="lazy"
                  width={20}
                  height={20}
                  src={option.logo}
                  srcSet={option.logo}
                  alt=''
                />
              </div>
              {option.label}
            </Box>
          )}
          renderInput={(params) => <TextField {...params} />}
        />
      </div>
    </div>
  );

  const selectAsset = (
    <FormControl fullWidth>
      <InputLabel variant='standard' htmlFor='uncontrolled-native'>
        Age
      </InputLabel>
      <NativeSelect
        defaultValue={""}
        inputProps={{
          name: "Assets",
          id: "uncontrolled-native",
        }}
      >
        {topAssets.map((item) => (
          <option value={item.symbol}>{item.label}</option>
        ))}
      </NativeSelect>
    </FormControl>
  );

  const handleForwardButton = () => {
    // if(dayCount + 1 > )
    if (DayCount <= 5) {
      setDayCount((state) => state + 1);
      setCountToBeSubtrated((state) => state - 1);
      setDailyClicked("forward");
    }
  };

  const handleBackwardButton = () => {
    if (DayCount !== 0) {
      setDayCount((state) => state - 1);
      setCountToBeSubtrated((state) => state + 1);
      setDailyClicked("backward");
    }
  };

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
        <div className='asset-data'>{assetComponent}</div>
        {/* <div
          style={{
            display: "flex",
            justifyContent: "center",
            color: "#fff",
            // backgroundColor: "#fff",
          }}
        >
          <FormControl style={{ color: "red" }}>
            <InputLabel
              color='#ffffff'
              variant='standard'
              htmlFor='uncontrolled-native'
            >
              Assets
            </InputLabel>
            <NativeSelect
              defaultValue={""}
              inputProps={{
                name: "Assets",
                id: "uncontrolled-native",
              }}
              color='white'
            >
              {topAssets.map((item) => (
                <option style={{ color: "red" }} value={item.symbol}>
                  {item.label}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
        </div> */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h5 className={styles.title}>DailyRocket Transactions</h5>
          <div className={styles.pagination}>
            <div>
              {" "}
              <FaAngleLeft
                onClick={() => handleBackwardButton()}
                className={DayCount === 0 ? styles.disabled : styles.icon}
              />
            </div>
            <div>
              {" "}
              <FaAngleRight
                onClick={() => handleForwardButton()}
                className={DayCount === 5 ? styles.disabled : styles.icon}
              />
            </div>
          </div>
        </div>
      </Title>
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
          {loading ? (
            <tr>
              <td className={styles.loadingContainer} colSpan='4'>
                <div className={styles.loading}>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </td>
            </tr>
          ) : (
            transactions.map((row) => (
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
            ))
          )}
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
