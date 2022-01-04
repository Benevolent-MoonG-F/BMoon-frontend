import React from 'react';
import styles from './games.module.css';
import {BMS} from '../../components/BMS/bms';
import {Element} from 'react-scroll'
import {DailyRocket} from '../../components/daily-rocket/dailyRocket';

export function Games(){
    return(
        <Element name="games" className={styles.games}>
                <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <BMS/>
                </div>
                <div className="col-md-6">
                <DailyRocket/>
                </div>
                {/* <div className={`${styles.tokens} col-12`}>
                    <h5>BTC ETH LINK ADA AVAX ONE LUNA MATIC </h5>
                </div> */}
            </div>
        </div>
        </Element>
        
    )
}