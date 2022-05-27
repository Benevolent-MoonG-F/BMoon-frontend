import React from "react";
import { Button } from "../components/button/index";
import styles from "./bms.module.css";
import Image from "next/image";
import Logo from "../../public/images/bmslogo.png";
const appLink = "/app/new-game";
import { Element } from "react-scroll";

export function BMS() {
  return (
    <Element className={styles.bms}>
      <div className='card text-center bg-transparent'>
        <div className='card-body'>
          <div className={`${styles.header}`}>
            <Image alt='logo' src={Logo} />
            <h5 className='text-white'>BMS</h5>
          </div>

          <p className='card-text text-white'>
            Benevolent Moon Squares(BMS) is a fun crypto prognostication game
            that takes predictive markets to a more exciting level. Call the
            date and time of your favorite token doing a Moon Shot, win the pot
            while also donating to charity.
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
