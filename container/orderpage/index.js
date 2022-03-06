import { useState, useCallback } from "react";
import { MultiStepForm } from "../../components/multiStepForm";
import { PrizesBanner } from "../../components/prizesBanner";
import { FormStepper } from "../../components/formStepper";
import { topAssets } from "../../components/multiStepForm/assetData";
import styles from "./index.module.css";
import { SwitchButton } from "../../components/switch";
import { useMoralis } from "react-moralis";
import daiabi from "../../utils/abis/dai.json";
import dailyrocket from "../../utils/abis/dailyrocket.json";
import bms from "../../utils/abis/bms.json";
import { getERC20Token, useContract } from "../../utils/hooks/useContract";
import TransactionStateModal from "../../components/TransactionModal/TransactionStateModal";
import { useAllowance } from "../../utils/hooks/useAllowance";
import { useMoralisDapp } from "../../providers/MoralisDappProvider/MoralisDappProvider";
import {
  BMSADDRESS,
  DAILYROCKETADDRESS,
  BTCBMSADDRESS,
  BTCDAILYROCKETADDRESS,
  DAILYADDRESSES,
  BMSADDRESSES,
} from "../../utils/constants";
import { useDispatch } from "react-redux";
import {
  addTransaction,
  closeTransaction,
} from "../../state/transaction/action";
import { useRouter } from "next/router";
// import { ethers } from 'ethers';

export function OrderPage(props) {
  const [step, setStep] = useState(
    // NextJS will render the component on server side first and window.localStorage is only defined on client side
    // Need to check if browser has been rendered on client side in order to access localStorage
    typeof window !== "undefined" && localStorage.getItem("step")
      ? Number(localStorage.getItem("step"))
      : 0
  );
  const [order, setOrder] = useState(
    typeof window !== "undefined" && localStorage.getItem("order")
      ? JSON.parse(localStorage.getItem("order"))
      : {
          asset: topAssets[0],
          price: null,
          payment: null,
        }
  );

  const router = useRouter();
  const { Moralis } = useMoralis();
  const { walletAddress } = useMoralisDapp();
  const [modal, setModal] = useState(false);
  const [show, setShow] = useState(false);
  const [txstate, settxstate] = useState("failed");
  const [reload, setReload] = useState(false);
  const { isDailyApproved, isBmsApproved } = useAllowance(
    reload,
    BMSADDRESSES[order.asset.symbol],
    DAILYADDRESSES[order.asset.symbol]
  );

  const { contract, bmscontract } = useContract(
    dailyrocket,
    DAILYADDRESSES[order.asset.symbol],
    bms,
    BMSADDRESSES[order.asset.symbol]
  );

  const dispatch = useDispatch();

  const handleClose = useCallback(() => {
    dispatch(closeTransaction({}));
  }, [dispatch]);

  const setTxState = useCallback(
    (state, placingOrder) => {
      dispatch(
        addTransaction({
          open: true,
          transactionState: state,
          placingOrder: placingOrder,
        })
      );
    },
    [dispatch]
  );

  const approveDai = async (address) => {
    try {
      setModal(true);
      setTxState("loading");
      window.scroll(300, 0);

      const web3 = await Moralis.enableWeb3();
      const token = new web3.eth.Contract(
        daiabi,
        "0x001B3B4d0F3714Ca98ba10F6042DaEbF0B1B7b6F"
      );

      const infiniteAmount =
        (await token.methods.balanceOf(walletAddress).call()) + 4e18;

      console.log(infiniteAmount);
      const contract = new web3.eth.Contract(
        daiabi,
        "0x001B3B4d0F3714Ca98ba10F6042DaEbF0B1B7b6F"
      );
      const tx = await contract.methods.approve(address, infiniteAmount).send({
        from: walletAddress,
      });
      // console.log(tx)
      // if(confirmations >= 1){
      setModal(true);
      setTxState("success");
      setReload(true);
      // }
    } catch (err) {
      // console.log(err)
      console.log(err);
      setModal(true);
      setTxState("failed");
    }
  };

  const handleSubmit = async () => {
    // console.log(order);
    const formatPrice = parseFloat(order.price) * 10 ** 8;
    // console.log(formatPrice);

    if (isDailyApproved) {
      try {
        setModal(true);
        // settxstate("loading");
        setTxState("loading", true);
        setShow(true);
        window.scroll(300, 0);

        const tx = await contract.methods.predictClosePrice(order.price).send({
          from: walletAddress,
        });
        setModal(true);
        // settxstate("success");
        setTxState("success", true);
        localStorage.setItem("step", 0);
      } catch (err) {
        setModal(true);
        // settxstate("failed");
        setTxState("failed", true);
        console.log(err);
      }
    } else {
      approveDai(DAILYADDRESSES[order.asset.symbol]);
    }
  };

  const handleBMSSubmit = async () => {
    if (isBmsApproved) {
      console.log(orderBMS.time1.getTime());
      try {
        settxstate("loading", true);
        setModal(true);
        const tx = await bmscontract.methods
          .predictAsset(orderBMS.time1.getTime())
          .send({
            from: walletAddress,
          });

        setModal(true);
        settxstate("success", true);
        localStorage.setItem("stepBMS", 0);
      } catch (err) {
        console.log(err);
        setModal(true);
        settxstate("failed", true);
      }
    } else {
      approveDai(BMSADDRESSES[order.asset.symbol]);
    }
  };

  const [stepBMS, setStepBMS] = useState(
    // NextJS will render the component on server side first and window.localStorage is only defined on client side
    // Need to check if browser has been rendered on client side in order to access localStorage
    typeof window !== "undefined" && localStorage.getItem("stepBMS")
      ? Number(localStorage.getItem("stepBMS"))
      : 0
  );
  const [orderBMS, setOrderBMS] = useState(
    typeof window !== "undefined" && localStorage.getItem("orderBMS")
      ? JSON.parse(localStorage.getItem("orderBMS"))
      : {
          asset: topAssets[0],
          price: null,
          payment: null,
          time1: new Date(),
          time2: "",
        }
  );

  const [isBMS, setIsBMS] = useState(false);

  const nextStep = () => {
    if (order.asset !== null && order.price !== null && step < 2) {
      const forward = step === 0 && order.payment !== null ? 2 : 1;
      setStep((prev) => prev + forward);
      localStorage.setItem("step", step + forward);
      localStorage.setItem("order", JSON.stringify(order));
    } else {
      alert("Show a popup asking user to fill out all the fields.");
    }
  };

  const nextStepBMS = () => {
    if (orderBMS.asset !== null && stepBMS < 2) {
      const forward = stepBMS === 0 && orderBMS.payment !== null ? 2 : 1;
      setStepBMS((prev) => prev + forward);
      localStorage.setItem("stepBMS", stepBMS + forward);
      localStorage.setItem("orderBMS", JSON.stringify(orderBMS));
    } else {
      alert("Show a popup asking user to fill out all the fields.");
    }
  };

  const prevStep = () => {
    if (step > 0) {
      const back = step === 2 ? 2 : 1;
      setStep((prev) => prev - back);
      localStorage.setItem("step", step - back);
    }
  };

  const prevStepBMS = () => {
    if (stepBMS > 0) {
      const back = stepBMS === 2 ? 2 : 1;
      setStepBMS((prev) => prev - back);
      localStorage.setItem("stepBMS", stepBMS - back);
    }
  };

  const submit = () => {
    // runContractFunction();
    handleSubmit();
  };

  const submitBMS = () => {
    handleBMSSubmit();
  };

  var props = {
    step,
    setOrder,
    order,
    setOrder,
    prevStep,
    nextStep,
    submit,
    approved: isDailyApproved,
  };

  var propsBMS = {
    step: stepBMS,
    setOrder: setOrderBMS,
    order: orderBMS,
    setOrder: setOrderBMS,
    prevStep: prevStepBMS,
    nextStep: nextStepBMS,
    submit: submitBMS,
    approved: isBmsApproved,
  };
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <PrizesBanner className={styles.bannerContainer} />
          <SwitchButton isBMS={isBMS} setIsBMS={setIsBMS} />
          {isBMS ? (
            <MultiStepForm
              {...propsBMS}
              isBMS={isBMS}
              className={styles.formContainer}
            />
          ) : (
            <MultiStepForm
              {...props}
              isBMS={isBMS}
              className={styles.formContainer}
            />
          )}
          <FormStepper step={step} className={styles.stepperContainer} />
        </div>

        <TransactionStateModal
          modal={modal}
          setModal={setModal}
          txstate={txstate}
        />
      </div>
    </main>
  );
}
