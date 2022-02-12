import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import styles from './index.module.css';
const useStyles = makeStyles({
    depositContext: {
      flex: 1,
    }  
  });

function convertDateToUTC(date) { 
    return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 
                    date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()); 
}
export function AnalogClock(props) {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(
      () => setValue(new Date()),
      1000
    );

    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <div className={styles.container}>

      <Typography className={useStyles.depositContext, styles.text}>
        {value.toUTCString().substr(0, 16)}
      </Typography>
      <Typography className={useStyles.depositContext, styles.text}>
        {value.toUTCString().substr(16, 25)}
      </Typography>
      <Clock value={convertDateToUTC(value)} className={styles.clock} renderNumbers={true} />
    </div>
  )
}
