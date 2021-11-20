import { Fragment, useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


const paymentMethod = [
  {
    label: 'USDC'
  },
  {
    label: 'Tera'
  }
]

export function SelectPayment(props) {

  const { order, setOrder, nextStep } = props;

  const updatePayment = (event) => {
    setOrder(prevState => ({
      ...prevState,
      payment: event.target.value,
    }));
  
  }
  
  // Need to be implemented
  // Estimated network fees
  const fee = 1.2


  const paymentSelectionComponent = (
    <FormControl component="fieldset">  
      <RadioGroup 
        row aria-label="gender" 
        name="row-radio-buttons-group"
        value={order.payment}
        onChange={updatePayment}
      >
        {paymentMethod.map(item => 
        <Fragment key={item.label}>
          <FormControlLabel value={item.label} control={<Radio />} label={item.label} />
        </Fragment>
        )}
      </RadioGroup>
      <h4>Estimated nextwork fees: ${fee}</h4>
    </FormControl>
  );

  return (
    <Fragment>
      <div>
        <h3>Asset {`${order?.asset?.label}`}</h3>
        <h3>Predicted price {`$${order?.price}`}</h3>
        
        {paymentSelectionComponent}

      </div>
      <div>

    </div>
  
    </Fragment>
  );
}

