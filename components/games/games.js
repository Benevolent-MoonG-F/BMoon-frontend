import React from "react";
import styles from "./games.module.css";
import { BMS } from "../BMS/bms";
import { Element } from "react-scroll";
import { DailyRocket } from "../daily-rocket/dailyRocket";
import { Sprint } from "../69sprint/index";
import Image from "next/image";
import BTC from "../../public/images/btc.png";
import ETH from "../../public/images/eth.png";
import LINK from "../../public/images/link.png";
import ADA from "../../public/images/ada.png";
import AVAX from "../../public/images/avax.png";
import solana from "../../public/images/solana.svg";
import bnb from "../../public/images/bnb.png";
import MATIC from "../../public/images/matic.png";
import UNICEF from "../../public/images/unicef.png";
import FLEM from "../../public/images/fleming.png";
import LUST from "../../public/images/lust-removebg-preview.png";
import WATER from "../../public/images/The_Water_Project_Logo-removebg-preview.png";
import FREE from "../../public/images/free.png";
import ANGEL from "../../public/images/angel.png";

export function Games() {
  return (
    <Element name='games' className={styles.games}>
      <div className='container'>
        <div className='row'>
          <h3 className='text-white text-center pb-5'>Game Basics</h3>
        </div>
        <div className='row '>
          <div className='col-xl-4 col-md-6 mb-5'>
            <BMS />
          </div>
          <div className='col-xl-4 col-md-6 mb-5'>
            <DailyRocket />
          </div>
          <div className='col-xl-4 col-md-6 mb-5 mx-auto'>
            <Sprint />
          </div>
        </div>

        <div className='row mt-5 pt-5'>
          <div className='col-12'>
            <h3 className='text-white text-center pt-2'>Tokens</h3>
            <p className='text-white text-center'>
              Tokens users can prognosticate in BMS and Daily Rocket.
            </p>
          </div>

          <div className='col-12 text-center pt-5'>
            <figure className=' pb-5'>
              <Image
                alt='BTC'
                src={BTC}
                className={`${styles.tokenImg} img-fluid`}
                height='130px'
                width='130px'
              />
              <figcaption>BTC</figcaption>
            </figure>

            <figure className='pb-5'>
              <Image
                alt='Eth'
                src={ETH}
                className={`${styles.tokenImg} img-fluid`}
                height='130px'
                width='130px'
              />
              <figcaption>ETH</figcaption>
            </figure>

            <figure className=' pb-5'>
              <Image
                alt='Link'
                src={LINK}
                className={`${styles.tokenImg} img-fluid`}
                height='130px'
                width='130px'
              />
              <figcaption>LINK</figcaption>
            </figure>

            {/* <figure className=' pb-5'>
              <Image
                alt='Ada'
                src={ADA}
                className={`${styles.tokenImg} img-fluid`}
                height='130px'
                width='130px'
              />
              <figcaption>ADA</figcaption>
            </figure> */}

            {/* <figure className='pb-5'>
              <Image
                alt='Avax'
                src={AVAX}
                className={`${styles.tokenImg} img-fluid`}
                height='130px'
                width='130px'
              />
              <figcaption>AVAX</figcaption>
            </figure> */}

            <figure className=' pb-5'>
              <Image
                alt='Luna'
                src={solana}
                className={`${styles.tokenImg} img-fluid`}
                height='130px'
                width='130px'
              />
              <figcaption>Solana</figcaption>
            </figure>

            {/* <figure className=' pb-5'>
              <Image
                alt='One'
                src={bnb}
                className={`${styles.tokenImg} img-fluid`}
                height='130px'
                width='130px'
              />
              <figcaption>BNB</figcaption>
            </figure> */}

            <figure className=' pb-5'>
              <Image
                alt='Matic'
                src={MATIC}
                className={`${styles.tokenImg} img-fluid`}
                height='130px'
                width='130px'
              />
              <figcaption>MATIC</figcaption>
            </figure>
          </div>
        </div>
      </div>

      <div className='container-fluid'>
        {/* Benovelent organisations */}

        <div className='row mt-5 pt-3'>
          <div className='col-12'>
            <h3 className='text-white text-center pt-2'>
              Benevolent Recipient
            </h3>
            {/* <p className='text-white text-center'>
              Tokens users can prognosticate in BMS and Daily Rocket.
            </p> */}
          </div>

          <div className='col-12 text-center'>
            <div className={styles.charityOrganization}>
             

              <figure className='pb-5'>
                <a href='https://www.angelprotocol.io/' target='blank'>
                  <Image
                    alt='Angel-Protocol'
                    src={ANGEL}
                    className={`${styles.tokenImg} img-fluid`}
                    height='100px'
                    width='200px'
                  />
                </a>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
