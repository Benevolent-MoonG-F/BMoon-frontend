import React from "react";
import { Button } from "../components/button/index";
import styles from "./index.module.css";
import Image from "next/image";
import Logo from "../../public/images/69print.png";
const appLink = "/app/69Sprint";
import { Element } from "react-scroll";

export function Sprint() {
  return (
    <Element className={styles.print}>
      <div className='card text-center bg-transparent'>
        <div className='card-body'>
          <div className={`${styles.header}`}>
            <Image alt='logo' src={Logo} />
            <h5 className='text-white'>69 Sprint</h5>
          </div>

          <p className='card-text text-white'>
            Correctly predict the order of tokens in the 6-9 slots of the
            CoinMarketCap top 10 rankings at the close of a 72 hour window, and
            not only win the pot, but also help direct the charitable pot funds
            to the charity you vote for.
          </p>
          <Button
            href={appLink}
            btnClassName={styles.btnWrapper}
            linkClassName={styles.btnText}
          >
            Play Game
          </Button>
        </div>
      </div>
    </Element>
  );
}
