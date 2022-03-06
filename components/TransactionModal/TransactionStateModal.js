import React, { useCallback } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CircularProgress from "@mui/material/CircularProgress";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import styles from "./index.module.css";
import {
  addTransaction,
  closeTransaction,
} from "../../state/transaction/action";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  ":active": {
    border: "none",
  },
};

export default function TransactionStateModal({ open, setOpen }) {
  // const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const transactionState = useSelector((state) => {
    return state.transaction;
  });
  console.log(transactionState);
  const handleClose = useCallback(() => {
    console.log("51", transactionState);
    if (
      transactionState.placingOrder &&
      transactionState.transactionState === "success"
    ) {
      router.route;
      console.log("here1");
      dispatch(closeTransaction({}));
      router.push("/app/dash-board");
    } else {
      console.log("here2");
      dispatch(closeTransaction({}));
    }
  }, [dispatch, transactionState]);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={transactionState.open}
        onClose={() => handleClose()}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {transactionState.transactionState === "loading" ? (
              <CircularProgress size='6rem' />
            ) : transactionState.transactionState === "success" ? (
              <CheckCircleOutlineIcon
                sx={{ fontSize: "100px", color: "green" }}
              />
            ) : transactionState.transactionState === "failed" ? (
              <HighlightOffIcon sx={{ fontSize: "100px", color: "red" }} />
            ) : null}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              {transactionState.transactionState === "loading"
                ? "Waiting for Confirmation"
                : transactionState.transactionState === "success"
                ? "Transaction Successful"
                : transactionState.transactionState === "failed"
                ? "Transaction Failed"
                : ""}
            </Typography>
          </Box>
          {transactionState.transactionState === "loading" ? null : (
            <Box sx={{ marginTop: "30px", width: "100%" }}>
              <Button
                onClick={() => handleClose()}
                className={styles.closebtn}
                sx={{
                  bgcolor: "#142237ec",
                  width: "100%",
                  padding: "10px",
                  color: "#fff",
                  ":hover": {
                    backgroundColor: "#142237ec",
                  },
                }}
              >
                Close
              </Button>
            </Box>
          )}
        </Box>
      </Modal>
    </div>
  );
}
