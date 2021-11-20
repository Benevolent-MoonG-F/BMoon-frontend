import { useState } from "react";
// import SwipeableViews from 'react-swipeable-views';
import { SelectAsset } from "./selectAsset";
import { SelectPayment } from "./selectPayment";
import { Button} from '@mui/material';
import styles from './index.module.css'
export function MultiStepForm(props) {

    const { step, order, setOrder, nextStep, prevStep, submit, className} = props;

    // Temporarily setup, need to be implemented
    const isAuthenticated = true;
    const connectWalet = () => {
        alert('Connect Wallet')
    }

    // Prepare button for form control
    const formControl = () => {

        if (isAuthenticated) {
            return (
                <div className={styles.buttonContainer}>
                { step > 0 && 
                    <Button 
                        variant="contained" 
                        color="primary"
                        style={{margin: '15px'}}
                        onClick={prevStep}
                        > Back
                    </Button>
                }

                { step !== 2
                    ? <Button 
                    variant="contained" 
                    color="primary"
                    style={{margin: '15px'}}
                    onClick={nextStep}
                    > Next </Button>
                    
                    : <Button 
                    variant="contained" 
                    color="primary"
                    style={{margin: '15px'}}
                    onClick={submit}
                    > Submit </Button>
                }
                </div>
            )
        }
        else return (
            <div className={styles.connectBtn}>
                <Button 
                    variant="contained" 
                    color="primary"
                    style={{margin: '15px', width: '85%'}}
                    onClick={connectWalet}
                > Connect wallet
                </Button>
            </div>
        )
    }

    // Prepare Content
    const content = step => {
        switch (step){
            case 0:
                return (
                    <SelectAsset order={order} setOrder={setOrder} /> 
                );
            default:
                return (
                    <SelectPayment nextStep={nextStep} order={order} setOrder={setOrder} />

                );
        }
    }

    return (
        <div className={className}>

            <div className={styles.wrapper}>
                {/* Render content by step */}
                {content(step)}
                {formControl()}
            </div>
        </div>
    );
}