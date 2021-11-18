import { useState } from "react";
// import SwipeableViews from 'react-swipeable-views';
import { Confirm } from "./confirm";
import { SelectAsset } from "./selectAsset";
import { SelectPayment } from "./selectPayment";
import { Button} from '@mui/material';

export function MultiStepForm(props) {

    const [step, setStep] = useState(
        // NextJS will render the component on server side first and window.localStorage is only defined on client side 
        // Need to check if browser has been rendered on client side in order to access localStorage
        (typeof window !== "undefined" && localStorage.getItem("step")) ? Number(localStorage.getItem("step")) : 1
    );
    const [order, setOrder] = useState({
        asset: null,
        price: null,
        payment: null,

    })

    const handleChange = index => e => {
        setStep(index);
        localStorage.setItem("step", index)
    }

    const nextStep = () => {
        setStep(prev => prev +1);
        localStorage.setItem("step", step + 1);
    }

    const prevStep = () => {
        setStep(prev => prev - 1);
        localStorage.setItem("step", step - 1);
    }

    const submit = () => {

    }
    const content = step => {
        switch (step){
            case 1:
                return <SelectAsset order={order} setOrder={setOrder}/>;
            case 2:
                return <SelectPayment payment={order.payment} setOrder={setOrder} />;
            case 3:
                return <Confirm />;
        }
    }
    return (
        <div>
            {content(step)}
            <h2>{order?.asset}</h2>
            <h2>{order?.price}</h2>
            <div>
                { step > 1 && 
                    <Button 
                        variant="contained" 
                        color="primary"
                        style={{margin: '15px'}}
                        onClick={prevStep}
                        > Back
                    </Button>
                }

                { step !== 3
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
            </div>
    );
}