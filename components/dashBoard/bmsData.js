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
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function BMSData() {
  // const {bmsdata} = useAccountHistoryForBMS();
  const transactionInfo = useBMStransaction();
  const [isLoading, setIsLoading] = useState(false);
  // console.log('bmsdata -',bmsdata);
  console.log("transdata -", transactionInfo);

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

  return (
    <React.Fragment>
      <Title>
        <div className='asset-data'>{assetComponent}</div>
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
          {!isLoading ? (
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
            transactionInfo.map((row) => (
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
