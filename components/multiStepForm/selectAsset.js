import { Fragment, useState } from "react";
import Image from "next/image";
import { NumberFormatCustom } from "./numberFormatCustom";
import { topAssets } from "./assetData";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete'
import BitcoinLogo from '../../public/images/bitcoin.png'
import styles from './index.module.css'



export function SelectAsset(props) {

  const { order, setOrder } = props;
  const { asset, price } = order;

  const updateAsset = (event, newValue) => {

    setOrder( prevState => ({
      ...prevState,
      asset: newValue,
    }));
  }

  const updatePrice = (e) => {
      
    setOrder(prevState => ({
      ...prevState,
      price: e.target.value,
    }));
  }

  // Define components
  const assetComponent = (
    <div className={styles.assetWrapper}> 

    Asset 
    <Autocomplete 
      className={styles.box}
      value={asset}
      onChange={updateAsset}
      id="asset-select"
      sx={{ width: '200px', mx: '20px' }}
      // autoHighlight
      options={topAssets}
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box 
          component="li" 
          sx={{ "& > div": { mr: 3,flexShrink: 0 }} } {...props}
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
      renderInput={(params) => <TextField {...params} />}
    />    
  </div>
  );


  const pricePannelComponent = (
    <div className={styles.pricePanelWrapper}>

      {/* Fetch and idsplay asset's price in real time */}
      {/* Need to be implemented */}
      { asset && <h5>Current Price – {asset?.label}</h5>}
      { asset && <h1>{`$ ${asset?.currentPrice}`}</h1> }
    </div>
  );


  const priceInputBarComponent = (
    <div className={styles.priceInputWrapper}> 

      Predict Price
      <div className={styles.priceInputWrapperWrapper}> 

        <Box
            sx={{
              "& > :not(style)": { mt: '5px' }
            }}
          >
            <TextField
              
              value={price}
              onChange={updatePrice}
              name="numberformat"
              id="formatted-numberformat-input"
              InputProps={{
                inputComponent: NumberFormatCustom
              }}
              fullWidth
              className={styles.box}
            />
          </Box>
      </div>
    </div>
  );

  return (

    <Fragment>

      {/* Select Asset with dropdown menu */}
      {assetComponent}
            
      {/* Asset's Current Price Pannel  */}
      {pricePannelComponent}

      {/* Predict Price Input Bar */}
      {priceInputBarComponent}
    </Fragment>
  );
}