import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import styles from './index.module.css';

const steps = ['Select Asset', 'Select Payment Method', 'Confirm'];

export function FormStepper(props) {
    const { step, className } = props;


    return (
        <div className={className}>
            <Stepper activeStep={step}>
                {steps.map((label) => (           
                    <Step key={label} >
                        <StepLabel><h6 className='text-white'>{label}</h6></StepLabel>
                    </Step>

                ))}
            </Stepper>
        </div>
    );

}
