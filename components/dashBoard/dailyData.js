import React, { useState, useCallback, useMemo, useEffect } from "react";
import Link from "@material-ui/core/Link";
import Title from "./Title";
import { useDailyTransactions } from "../../utils/hooks/useGetTransactions";
import styles from "./dashBoard.module.css";
import { Table } from "react-bootstrap";
import ClaimModal from "./modals/ClaimModal";
import { addClaim } from "../../state/claim/action";
import { useDispatch, useSelector } from "react-redux";
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
import { useLoneContract } from "../../utils/hooks/useContract";
import { useGetAssetAddress } from "../../utils/hooks/useGetAssetAddress";
import { FACTORYADDRESS } from "../../utils/constants";
import factoryabi from "../../utils/abis/factory.json";
import { load } from "redux-localstorage-simple";
import { addDay, removeDay, updateDayCount } from "../../state/app/action";
import { useMoralis } from "react-moralis";
import dailyrocketabi from "../../utils/abis/dailyrocket.json";

// import Moralis from "moralis/types";

// export default function DailyData() {
//   const transactions = useDailyTransactions();
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function DailyData({
  dailyCountNumber,
  setDailyCount,
  setDailyClicked,
  dailyClicked,
  Contract,
}) {
  const [open, setOpen] = useState(false);

  const [count, setCount] = useState(0);
  const [DayCount, setDayCount] = useState(5);
  const [countToBeSubtracted, setCountToBeSubtrated] = useState(0);
  const [value, setValue] = useState("BTC");
  const [AssetAddress, setAssetAddress] = useState("");
  const [assetChanged, setAssetChanged] = useState(false);

  const { transactions, loading } = useDailyTransactions(
    dailyCountNumber,
    dailyClicked,
    DayCount,
    countToBeSubtracted,
    AssetAddress,
    assetChanged
  );

  const dispatch = useDispatch();
  const { Moralis } = useMoralis();

  const DAYCOUNT = useSelector((state) => state.app.dayCount);
  const MAXDAYCOUNT = useSelector((state) => state.app.MaxDayCount);

  console.log("DAYCOUNT", DAYCOUNT);

  useEffect(() => {
    const update = async () => {
      try {
        console.log("assetChanged");
        const web3 = await Moralis.enableWeb3();
        const contract = new web3.eth.Contract(dailyrocketabi, AssetAddress);
        const daycount = await contract.methods.dayCount().call();
        console.log("assetChanged", daycount);
        dispatch(updateDayCount({ dayCount: parseInt(daycount) }));
        setAssetChanged(false);
      } catch (err) {
        console.log(err);
      }
    };
    update();
  }, [AssetAddress, assetChanged]);

  console.log("value", value);

  const assetAddress = useMemo(async () => {
    try {
      console.log("contract2", value);
      const address = await Contract.methods.getDRAddress(value).call();

      setAssetAddress(address);
    } catch (err) {
      console.log(err);
    }
  }, [Contract, value]);

  // Define components
  const assetComponent = (
    <div className={`${styles.assetWrapper} container-fluid`}>
      <div className={`${styles.assetWrapper}`}>
        <h5>
          <b>Select Asset</b>
        </h5>
        <select
          onChange={(e) => {
            setAssetChanged(true);
            setValue(e.target.value);
          }}
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
    if (DAYCOUNT < MAXDAYCOUNT) {
      dispatch(addDay({}));
    }
  };

  const handleBackwardButton = useCallback(() => {
    if (DAYCOUNT !== 0) {
      dispatch(removeDay({}));
    }
  }, [dispatch]);

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

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h5 className={styles.title}>DailyRocket Transactions</h5>
          <div className={styles.pagination}>
            <div>
              {" "}
              <FaAngleLeft
                onClick={() => handleBackwardButton()}
                className={DAYCOUNT === 0 ? styles.disabled : styles.icon}
              />
            </div>
            <div>
              {" "}
              <FaAngleRight
                onClick={() => handleForwardButton()}
                className={
                  DAYCOUNT === MAXDAYCOUNT ? styles.disabled : styles.icon
                }
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
