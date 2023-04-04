
import React from 'react';
import {Element} from 'react-scroll';
import styles from './aboutPage.module.css';
 import Image from 'next/image';
import Logo from '../../public/images/logo.png';
import {Content} from './aboutContent/content';
export function AboutPage(){
    return(
        <Element className={styles.about}>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Benevolent Moon</h1>                                          
                    </div>           
                </div>
                <div className="row">
                    <div className="col">
                        <Content/>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <Image alt="logo" src={Logo}/>
                    </div>
                </div>
            </div>
            
        </Element>
       
    )
}