import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


const steps = ['Select Asset', 'Select Payment Method', 'Confirm'];

export function FormStepper(props) {
    const { step, className } = props;


    return (
        <div className={className}>
            <Stepper activeStep={step} alternativeLabel>
                {steps.map((label) => (           
                    <Step key={label} >
                        <StepLabel>{label}</StepLabel>
                    </Step>

                ))}
            </Stepper>
        </div>
    );

}
