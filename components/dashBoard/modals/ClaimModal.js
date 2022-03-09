import { useState, useCallback } from "react";
import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearClaim } from "../../../state/claim/action";
import { InputLabel } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CloseIcon from "@mui/icons-material/Close";
import { useContract } from "../../../utils/hooks/useContract";
import { MONEYHANDLER } from "../../../utils/constants";
import moneyhandlerabi from "../../../utils/abis/moneyhandler.json";
import dailyrocketabi from "../../../utils/abis/dailyrocket.json";
import { DAILYADDRESSES } from "../../../utils/constants";
import { addCharity } from "../../../state/claim/action";
import { ethers } from "ethers";
import Web3 from "web3";
import { useMoralisDapp } from "../../../providers/MoralisDappProvider/MoralisDappProvider";
import { addTransaction } from "../../../state/transaction/action";

const ClaimModal = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const [charity, setCharity] = useState("");
  const { walletAddress } = useMoralisDapp();

  const AddCharity = useCallback(
    (charityName) => {
      console.log("add charity");

      dispatch(
        addCharity({
          charity: charityName,
        })
      );
    },
    [dispatch, charity]
  );

  const setTxState = useCallback(
    (state) => {
      dispatch(addTransaction({ open: true, transactionState: state }));
    },
    [dispatch]
  );

  const claimState = useSelector((state) => {
    return state.claim;
  });

  const { contract, bmscontract } = useContract(
    dailyrocketabi,
    DAILYADDRESSES[claimState.assetName]
  );

  const claimWinnings = async () => {
    try {
      if (claimState.DailyRocket === true) {
        hideClaimModal();
        setTxState("loading");
        const hexValue = Web3.utils.stringToHex(claimState.charity);
        const claimtx = await contract.methods
          .claimWinnings(claimState.dayCount, claimState.betId, hexValue)
          .send({
            from: walletAddress,
          });
        setTxState("success");
      }
    } catch (err) {
      console.log(err);
      setTxState("failed");
    }
  };

  const handleChange = (event) => {
    setCharity(event.target.value);
    AddCharity(event.target.value);
  };

  const hideClaimModal = useCallback(() => {
    dispatch(clearClaim({ close: true }));
  }, [dispatch]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 320,
    bgcolor: "background.paper",
    // border: "2px solid #000",
    boxShadow: 24,
    p: 2,
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    // justifyContent: "center",
    flexDirection: "column",
    ":active": {
      border: "none",
    },
  };
  return (
    <Modal open={open} onClose={() => hideClaimModal()}>
      <Box sx={{ flexDirection: "column" }}>
        <Box sx={style}>
          <Box
            sx={{
              marginBottom: "20px",
              display: "flex",
              width: "100%",
              justifyContent: "flex-end",
            }}
          >
            <CloseIcon
              sx={{
                fontSize: "24px",
                border: "1px solid #000",
                borderRadius: "4px",
              }}
            />
          </Box>
          <h5 style={{ marginBottom: "50px" }}>
            Select a Charitable Organization to Continue
          </h5>
          <FormControl sx={{ m: 1, minWidth: 200, marginBottom: "50px" }}>
            <InputLabel id='demo-simple-select-autowidth-label'>
              Orgs
            </InputLabel>
            <Select
              labelId='demo-simple-select-autowidth-label'
              id='demo-simple-select-autowidth'
              value={charity}
              onChange={handleChange}
              autoWidth
              label='Orgs'
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value={"UNICEF"}>UNICEF</MenuItem>
            </Select>
          </FormControl>
          <Button
            onClick={() => claimWinnings()}
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
            Claim
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ClaimModal;
