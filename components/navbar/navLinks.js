import styles from './navLinks.module.css'
import React, { useState } from "react";
import Link from 'next/link'
import { MenuDropDown } from './menuDropDown';

export function NavLinks(props) {
    return (
        <div className={styles.navLinksContainer}>
            <ul className={styles.linksWrapper}>
                <li className={styles.linkItem}> 
                    <Link href="/">
                        <a className={styles.link}>Home</a>
                    </Link>
                </li>
                <li className={styles.linkItem}> 
                    <Link href="/">
                        <a className={styles.link}>About Us</a>
                    </Link>
                </li>
                                
                <li className={styles.linkItem}> 
                    <Link href="/">
                        <a className={styles.link}>Community</a>
                    </Link>
                </li>

                <li className={styles.linkItem}> 
                    <Link href="/">
                        <a className={styles.link}>FAQ</a>
                    </Link>
                </li>

            </ul>
        </div>
    );
}