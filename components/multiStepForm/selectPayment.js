import { Fragment, useState } from "react";
import { Radio } from '@mui/material';



export function SelectPayment(props) {

    return (
      <Fragment>
        <h1> Select Asset</h1>
  
        <Radio
        //   checked={selectedValue === 'a'}
        //   onChange={handleChange}
          value="a"
          name="radio-buttons"
          inputProps={{ 'aria-label': 'A' }}
        />
        
      </Fragment>


    );
}

