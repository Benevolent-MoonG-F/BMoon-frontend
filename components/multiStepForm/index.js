import { useState } from 'react';
// import SwipeableViews from 'react-swipeable-views';
import { SelectAsset } from './selectAsset';
import { SelectPayment } from './selectPayment';
import { Button } from '@mui/material';
import styles from './index.module.css';
import { useMoralis, useWeb3Contract } from 'react-moralis';
import { useMoralisDapp } from '../../providers/MoralisDappProvider/MoralisDappProvider';
import daiabi from '../../utils/abis/dai.json';
import usdcabi from '../../utils/abis/usdc.json';
export function MultiStepForm(props) {
  const { walletAddress, chainId } = useMoralisDapp();
  const { authenticate, isAuthenticated, logout } = useMoralis();

  const {
    step,
    order,
    setOrder,
    nextStep,
    prevStep,
    submit,
    className,
    isBMS,
  } = props;

  // Temporarily setup, need to be implemented
  const isAuthenticate = true;
  const connectWalet = () => {
    alert('Connect Wallet');
  };

  // Prepare button for form control
  const formControl = () => {
    if (isAuthenticated) {
      return (
        <div className={styles.buttonContainer}>
          {step > 0 && (
            <Button
              variant="contained"
              color="primary"
              style={{ margin: '15px' }}
              onClick={prevStep}
            >
              {' '}
              Back
            </Button>
          )}

          {step !== 2 ? (
            <Button
              variant="contained"
              color="primary"
              style={{ margin: '15px' }}
              onClick={nextStep}
            >
              {' '}
              Next{' '}
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              style={{ margin: '15px' }}
              onClick={submit}
            >
              {' '}
              Submit{' '}
            </Button>
          )}
        </div>
      );
    } else
      return (
        <div className={styles.connectBtn}>
          <Button
            variant="contained"
            color="primary"
            style={{ margin: '15px', width: '85%' }}
            onClick={connectWalet}
          >
            {' '}
            Connect wallet
          </Button>
        </div>
      );
  };

  // Prepare Content
  const content = (step) => {
    switch (step) {
      case 0:
        return <SelectAsset order={order} isBMS={isBMS} setOrder={setOrder} />;
      default:
        return (
          <SelectPayment
            nextStep={nextStep}
            order={order}
            setOrder={setOrder}
          />
        );
    }
  };

  return (
    <div className={className}>
      <div
        className={styles.wrapper}
        style={{ height: isBMS ? '580px' : '450px' }}
      >
        {/* Render content by step */}
        {content(step)}
        {formControl()}
      </div>
    </div>
  );
}
