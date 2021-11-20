import { useState } from "react";
import { MultiStepForm } from '../../components/multiStepForm';
import { Navbar } from '../../components/navbar';
import { PrizesBanner } from "../../components/prizesBanner";
import { FormStepper } from '../../components/formStepper';
import { topAssets } from "../../components/multiStepForm/assetData";
import styles from './index.module.css';

export function OrderPage(props) {
    const [step, setStep] = useState(
        // NextJS will render the component on server side first and window.localStorage is only defined on client side 
        // Need to check if browser has been rendered on client side in order to access localStorage
        (typeof window !== "undefined" && localStorage.getItem("step")) ? Number(localStorage.getItem("step")) : 0
    );
    const [order, setOrder] = useState(
        (typeof window !== "undefined" && localStorage.getItem("order")) 
        ? JSON.parse(localStorage.getItem("order"))
        : {
        asset: topAssets[0],
        price: null,
        payment: null,
    })

    const handleChange = index => e => {
        setStep(index);
        localStorage.setItem("step", index)
    }

    const nextStep = () => {
        if (order.asset !== null && order.price !== null && step < 2) {
            const forward = (step === 0 && order.payment !== null ) ? 2 : 1;
            setStep(prev => prev + forward);
            localStorage.setItem("step", step + forward);
            localStorage.setItem("order", JSON.stringify(order));
        }
        else {
            alert("Show a popup asking user to fill out all the fields.")
        }
    }

    const prevStep = () => {
        if (step > 0) {
            const back = step === 2 ? 2 : 1
            setStep(prev => prev - back);
            localStorage.setItem("step", step - back);
        }

    }

    const submit = () => {

    }
    var props = {
        step,
        setOrder,
        order,
        setOrder,
        prevStep,
        nextStep,
        submit,
    }
    return (
        <div>
            <Navbar/>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <PrizesBanner className={styles.bannerContainer}/>
                    <MultiStepForm {...props} className={styles.formContainer} />
                    <FormStepper step={step} className={styles.stepperContainer} />
                </div>

            </div>
        </div>
    );
}