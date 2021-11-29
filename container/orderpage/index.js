import { useState } from 'react';
import { MultiStepForm } from '../../components/multiStepForm';
import { Navbar } from '../../components/navbar';
import { PrizesBanner } from '../../components/prizesBanner';
import { FormStepper } from '../../components/formStepper';
import { topAssets } from '../../components/multiStepForm/assetData';
import styles from './index.module.css';
import { SwitchButton } from '../../components/switch';
import { useMoralis, useWeb3Contract } from 'react-moralis';
import daiabi from '../../utils/abis/dai.json';
import dailyrocket from '../../utils/abis/dailyrocket.json';

export function OrderPage(props) {
  const [step, setStep] = useState(
    // NextJS will render the component on server side first and window.localStorage is only defined on client side
    // Need to check if browser has been rendered on client side in order to access localStorage
    typeof window !== 'undefined' && localStorage.getItem('step')
      ? Number(localStorage.getItem('step'))
      : 0
  );
  const [order, setOrder] = useState(
    typeof window !== 'undefined' && localStorage.getItem('order')
      ? JSON.parse(localStorage.getItem('order'))
      : {
          asset: topAssets[0],
          price: null,
          payment: null,
        }
  );

  const { runContractFunction, contractResponse, error, isRunning, isLoading } =
    useWeb3Contract({
      abi: dailyrocket,
      contractAddress: '0x91873876e830EcF10F1bC73c168C13ccAbfecff7',
      functionName: 'predictClosePrice',
      params: {
        _asset: '',
        _prediction: order.price,
        _token: '',
        _swapPairs: '',
      },
    });

  // console.log(isLoading);

  const [stepBMS, setStepBMS] = useState(
    // NextJS will render the component on server side first and window.localStorage is only defined on client side
    // Need to check if browser has been rendered on client side in order to access localStorage
    typeof window !== 'undefined' && localStorage.getItem('stepBMS')
      ? Number(localStorage.getItem('stepBMS'))
      : 0
  );
  const [orderBMS, setOrderBMS] = useState(
    typeof window !== 'undefined' && localStorage.getItem('orderBMS')
      ? JSON.parse(localStorage.getItem('orderBMS'))
      : {
          asset: topAssets[0],
          price: null,
          payment: null,
          time1: new Date(),
          time2: '',
        }
  );

  const [isBMS, setIsBMS] = useState(false);

  const handleChange = (index) => (e) => {
    setStep(index);
    localStorage.setItem('step', index);
  };

  const nextStep = () => {
    if (order.asset !== null && order.price !== null && step < 2) {
      const forward = step === 0 && order.payment !== null ? 2 : 1;
      setStep((prev) => prev + forward);
      localStorage.setItem('step', step + forward);
      localStorage.setItem('order', JSON.stringify(order));
    } else {
      alert('Show a popup asking user to fill out all the fields.');
    }
  };

  const nextStepBMS = () => {
    if (orderBMS.asset !== null && orderBMS.price !== null && stepBMS < 2) {
      const forward = stepBMS === 0 && orderBMS.payment !== null ? 2 : 1;
      setStepBMS((prev) => prev + forward);
      localStorage.setItem('stepBMS', stepBMS + forward);
      localStorage.setItem('orderBMS', JSON.stringify(orderBMS));
    } else {
      alert('Show a popup asking user to fill out all the fields.');
    }
  };

  const prevStep = () => {
    if (step > 0) {
      const back = step === 2 ? 2 : 1;
      setStep((prev) => prev - back);
      localStorage.setItem('step', step - back);
    }
  };

  const prevStepBMS = () => {
    if (stepBMS > 0) {
      const back = stepBMS === 2 ? 2 : 1;
      setStepBMS((prev) => prev - back);
      localStorage.setItem('stepBMS', stepBMS - back);
    }
  };

  const submit = () => {
    runContractFunction();
  };
  var props = {
    step,
    setOrder,
    order,
    setOrder,
    prevStep,
    nextStep,
    submit,
  };

  var propsBMS = {
    step: stepBMS,
    setOrder: setOrderBMS,
    order: orderBMS,
    setOrder: setOrderBMS,
    prevStep: prevStepBMS,
    nextStep: nextStepBMS,
    submit,
  };
  return (
    <div>
      <Navbar />
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
      </div>
    </div>
  );
}
