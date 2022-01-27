import { Fragment, useState, useEffect } from 'react';
import Image from 'next/image';
import { NumberFormatCustom } from './numberFormatCustom';
import { topAssets } from './assetData';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import styles from './index.module.css';
import axios from 'axios';
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import 'react-datetime-picker/dist/DateTimePicker.css';

export function SelectAsset(props) {
  const { order, setOrder, isBMS } = props;
  const { asset, price } = order;
  const [currentPrice, setCurrentPrice] = useState('');
  const [count, setCount] = useState(0);
  const [value, onChange] = useState(new Date());
  const [endValue, onEndChange] = useState('');

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCount((prev) => prev + 1);
    }, 5000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    try {
      const current = fetchPrice(asset);
    } catch (e) {
      console.log(e);
    }
  }, [asset, count]);

  useEffect(() => {
    const updateTime = (timeValue, time2Value) => {
      setOrder((prevState) => ({
        ...prevState,
        time1: timeValue,
        time2: time2Value,
      }));
    };
    updateTime(value, endValue);
  }, [value, setOrder, endValue]);

  const fetchPrice = async (asset) => {
    let Current = 0;
    if (asset) {
      try {
        await axios
          .get(
            `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${asset.symbol}&tsyms=USD`
          )
          .then((res) => {
            const assetSymbol = asset.symbol;
            Current = res.data.RAW[assetSymbol].USD.PRICE;
            setCurrentPrice(Current);
            return Current;
          });
        return Current;
      } catch (e) {
        console.log(e);
      }
    }
  };

  const updateAsset = async (event, newValue) => {
    const currentPrice = await fetchPrice(newValue);
    setOrder((prevState) => ({
      ...prevState,
      asset: newValue,
    }));
  };

  const updatePrice = (e) => {
    setOrder((prevState) => ({
      ...prevState,
      price: e.target.value,
    }));
  };

  // Define components
  const assetComponent = (
    <div className={`${styles.assetWrapper} container-fluid`}>
      <div className={`${styles.assetWrapper}`}>
      <h5 className="text-black">Select Asset</h5>
      <Autocomplete
        className={`${styles.box1} mx-auto`}
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
            sx={{ '& > div': { mr: 3, flexShrink: 0 } }}
            {...props}
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
    </div>
    
  );

  const pricePannelComponent = (
    <div className={styles.pricePanelWrapper}>
      {/* Fetch and idsplay asset's price in real time */}
      {/* Need to be implemented */}
      {asset && <h5 className='text-black'>Current Price – {asset?.label}</h5>}
      {asset && <h1>{`$ ${currentPrice}`}</h1>}
    </div>
  );

  const reactDateTimePicker = (
    <div className="container-fluid">
      <div className={`${styles.dateTime} row`}>
        <div className="col-lg-6 col-md-12 text-center">
          <h5 className='text-black'>Start Time</h5>
          <DateTimePicker onChange={onChange} value={value} className={`${styles.assetWrapper}`} />
        </div>

        <div className="col-lg-6 col-md-12 text-center">
          <h5 className='text-black'>End Time</h5>
          <DateTimePicker onChange={onEndChange} value={endValue}  className={`${styles.assetWrapper}`} />
        </div>
      </div>
    </div>
  );

  const priceInputBarComponent = (
    <div className={styles.priceInputWrapper}>
      Predict Price
      <div className={styles.priceInputWrapperWrapper}>
        <Box
          sx={{
            '& > :not(style)': { mt: isBMS ? '0px' : '5px' },
          }}
        >
          <TextField
            value={price}
            onChange={updatePrice}
            name="numberformat"
            id="formatted-numberformat-input"
            InputProps={{
              inputComponent: NumberFormatCustom,
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

      {isBMS ? reactDateTimePicker : ''}
    </Fragment>
  );
}
