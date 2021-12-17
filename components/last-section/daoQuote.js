import React from 'react';
import styles from './daoQuote.module.css';
import {Element} from 'react-scroll'
export function DaoQuote (){
    return(
        <Element name="daoQuote" className={styles.daoQuote}>
                <div className="container">
                <div className={`${styles.dao} row`}>

                    <h5 className="font-weight-bold mb-2 text-black">BMS-DAO</h5>
                    <h6>“The BMSDAO is an essential component to bringing the vision, mission, and values of the project to full fruition.   As a community-centric, community-galvanizing project, the governance and growth by our $BMS family is central to a successful journey.”</h6>  
                    <a href="#">Find out more</a> 
                    </div>
                </div>
        </Element>
       
    )
}