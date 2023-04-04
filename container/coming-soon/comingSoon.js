import React from 'react';
import styles from './comingSoon.module.css';
import {Element} from 'react-scroll';
import Router from 'next/router';

export function ComingSoon(){
    return(
        <Element className={styles.comingSoon}>
            <div>
                <h1>COMING SOON</h1>
                <div onClick={() => Router.back()}>Go Back</div>
                </div>
        </Element>
    )
}