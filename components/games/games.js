import React from 'react';
import styles from './games.module.css';
import {BMS} from '../../components/BMS/bms';
import {Element} from 'react-scroll'
import {DailyRocket} from '../../components/daily-rocket/dailyRocket';
import Image from 'next/image';
import BTC from '../../public/images/btc.png';
import ETH from '../../public/images/eth.png';
import LINK from '../../public/images/link.png';
import ADA from '../../public/images/ada.png';
import AVAX from '../../public/images/avax.png';
import ONE from '../../public/images/one.png';
import LUNA  from '../../public/images/luna.png';
import MATIC from '../../public/images/matic.png';
import { PartnerList } from '../partnerList';

export function Games(){
    return(
        <Element name="games" className={styles.games}>
                <div className="container">
                    <div className='row mt-5 pt-5'>
                        <h3 className='text-white text-center pb-5'>Game Basics</h3>
                    </div>
                    <div className="row ">
                        <div className="col-md-6 mb-5">
                            <BMS/>
                        </div>
                        <div className="col-md-6 mb-5">
                        <DailyRocket/>
                        </div>
                        {/* <div className={`${styles.tokens} col-12`}>
                            <h5>BTC ETH LINK ADA AVAX ONE LUNA MATIC </h5>
                        </div> */}
                    </div>
                    <div className='row mt-5 pt-5'>
                        <div className='col-12'>
                            <h3 className='text-white text-center pt-5'>Tokens</h3>
                            <p className='text-white text-center'>Token required for gameplay across Benevolent Moon Gaming.</p>
                        </div>

                        <div className='col-12 text-center pt-5 mb-5'>   
                        <figure className=' pb-5'>
                            <Image alt="BTC" src={BTC} className={`${styles.tokenImg} img-fluid`} height="130px" width="130px"/>
                                <figcaption>BTC</figcaption>
                            </figure>

                            <figure className='pb-5'>
                            <Image alt="Eth" src={ETH} className={`${styles.tokenImg} img-fluid`} height="130px" width="130px" />
                              <figcaption>ETH</figcaption>
                            </figure>

                            <figure className=' pb-5'>
                            <Image alt="Link" src={LINK} className={`${styles.tokenImg} img-fluid`} height="130px" width="130px" />
                           <figcaption>LINK</figcaption>
                            </figure>

                            <figure className=' pb-5'>
                            <Image alt="Ada" src={ADA} className={`${styles.tokenImg} img-fluid`} height="130px" width="130px" />
                          <figcaption>ADA</figcaption>
                            </figure>

                            <figure className='pb-5'>
                            <Image alt="Avax" src={AVAX} className={`${styles.tokenImg} img-fluid`} height="130px" width="130px" />
                            <figcaption>AVAX</figcaption>
                            </figure>

                            <figure className=' pb-5'>
                            <Image alt="Luna" src={LUNA} className={`${styles.tokenImg} img-fluid`} height="130px" width="130px" />
                            <figcaption>LUNA</figcaption>
                            </figure>

                            <figure className=' pb-5'>
                            <Image alt="One" src={ONE} className={`${styles.tokenImg} img-fluid`} height="130px" width="130px" />
                             <figcaption>ONE</figcaption>
                            </figure>

                            <figure className=' pb-5'>
                            <Image alt="Matic" src={MATIC} className={`${styles.tokenImg} img-fluid`} height="130px" width="130px" />
                              <figcaption>MATIC</figcaption>
                            </figure>
                        </div>

                    </div>
                    {/* <div className='row'>
                        <div className='col-12'>
                            <PartnerList/>
                        </div>
                    </div> */}
        </div>
        </Element>
        
    )
}