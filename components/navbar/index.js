import { useMediaQuery } from "react-responsive";
import { Logo }from '../logo/index';
import { NavLinks } from './navLinks';
import { MobileNavLinks} from "./mobileNavLinks";
import { Menu } from './menu'
import styles from './index.module.css';
import { DevicesSize } from "../responsive";
import Tilt from 'react-parallax-tilt';
import React, { useState } from "react";

export function Navbar(props) {
    const isTablet = useMediaQuery({ maxWidth: DevicesSize.tablet });
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const handleMenuBtn = () => {
        setIsMenuOpened(prev => !(prev))
    }
    return(
        <div className={styles.container}>
            <div className={styles.leftSection}>
                <Tilt><Logo /> </Tilt>
            </div>
            <div className={styles.midSection}>
                {!isTablet && <NavLinks />}
            </div>
            <div className={styles.rightSection}>
                {!isTablet && <Menu isOpened={isMenuOpened} handleBtn={handleMenuBtn}/>}
                {isTablet && <MobileNavLinks />}
            </div>
        </div>
    ) 
}