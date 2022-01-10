import React from 'react';
import {Button} from '../../components/button/index';
import styles from './dailyRocket.module.css';
import Image from 'next/image';
import Logo from '../../public/images/dailylogo.png'
import {Element} from 'react-scroll';
const appLink = '/app/new-game';
export function DailyRocket(){
    return(
        <Element className={styles.dao}>
                <div className="card text-center bg-transparent">
            <div className="card-body">
                <div className={`${styles.header}`}>
                <Image alt="logo" src={Logo} className="img-fluid"/>
                <h5 className="text-white">Daily Rocket</h5>
                </div>
                
                <p className="card-text text-white">
                For a more immediate gratification, the Daily Rocket has a winner every day!  Correctly predict the closing price of your favorite tokens (UTC close of day) and win the pot, while again choosing which benevolent cause receives a donation.
                </p>
                <Button href={appLink}
                        btnClassName={styles.btnWrapper}
                        linkClassName={styles.btnText}
                        >Play Game</Button>
  </div>
</div>
        </Element>
        
    )
};