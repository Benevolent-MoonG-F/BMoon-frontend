import { Fragment, useState, forwardRef } from "react";
import Image from "next/image";
// import NumberFormat from 'react-number-format';
// import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete'
import { Button } from "@mui/material";
import BitcoinLogo from '../../public/images/bitcoin.png'

const topAssets = [
  { 
      label: 'Bitcoin', 
      id: 1,
      logo: BitcoinLogo,
  },
  { 
      label: 'Ethereum', 
      id: 2,
      logo: BitcoinLogo,
  },
  { 
      label: 'Eks', 
      id: 3,
      logo: BitcoinLogo,
  },
];

// const NumberFormatCustom = forwardRef(function NumberFormatCustom(props, ref) {
//   const { onChange, ...other } = props;

//   return (
//     <NumberFormat
//       {...other}
//       getInputRef={ref}
//       onValueChange={(values) => {
//         onChange({
//           target: {
//             name: props.name,
//             value: values.value,
//           },
//         });
//       }}
//       thousandSeparator
//       isNumericString
//       prefix="$"
//     />
//   );
// });

// NumberFormatCustom.propTypes = {
//   name: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

export function SelectAsset(props) {

    const [value, setValue] = useState(null);
    const { order, setOrder } = props;

    const handleAsset = (e, option) => {
      setValue(option);

      setOrder( prevState => ({
        ...prevState,
        asset: option?.label,
      }));

    }

    const handlePrice = (newPrice) => {
      setOrder(prevState => ({
        ...prevState,
        price: newPrice,
      }));
    }
    return (

      <Fragment>
        <h1>Select Asset: {order?.asset}</h1>
  
        <Autocomplete 
          value={value}
          onChange={handleAsset}
          id="asset-select"
          sx={{ width: 300 }}
                    // autoComplete={true}
          autoHighlight
          options={topAssets}
          getOptionLabel={(option) => option.label}
          renderOption={(props, option) => (
            <Box 
              component="li" 
              sx={{ "& > div": { mr: 2, flexShrink: 0 } } } {...props}
            >
              <div>                             
                <Image
                  //   loading="lazy"
                  width={20}
                  height={20}
                  src={option.logo}
                  srcSet={option.logo}
                  alt=""
                />
              </div>
                {option.label}
            </Box>
          )}
          renderInput={(params) => <TextField {...params} label="Asset" />}
        />

          <TextField 
            type="numeric"
            label="Predicted price"
            variant="outlined"
            sx={{m:3, ml:0, width: 300}}
          />
      </Fragment>
    );
}