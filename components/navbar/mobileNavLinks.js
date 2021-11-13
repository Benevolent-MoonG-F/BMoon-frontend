import React, { useState } from "react";
import Link from 'next/link'

import { Menu } from './menu'
import { MenuToggle } from './menuToggle';
import { Marginer } from "../marginer";

import styles from './mobileNavLinks.module.css'

export function MobileNavLinks(props) {
    const [isOpen, setOpen] = useState(false);
  
    return (
    
        <div className={styles.navLinksContainer}>
            <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
            {isOpen && (
            <ul className={styles.linksWrapper}>
                <li className={styles.linkItem}> 
                    <Link href="/">
                        <a className={styles.link}>About Us</a>
                    </Link>
                </li>
                
                <li className={styles.linkItem}> 
                    <Link href="/">
                        <a className={styles.link}>Home</a>
                    </Link>
                </li>
                            
                <li className={styles.linkItem}> 
                    <Link href="/">
                        <a className={styles.link}>Home</a>
                    </Link>
                </li>
                <Marginer margin="2em"/>
                {/* <Menu /> */}
            </ul>
            )}
        </div>
    );
  }