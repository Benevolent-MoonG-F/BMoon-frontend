import React, { useState } from "react";
import Link from 'next/link'

import { MenuToggle } from './menuToggle';
import { Marginer } from "../marginer";
import { mobileLandingPageLinks } from "./navLinkData";
import styles from './mobileNavLinks.module.css'

export function MobileNavLinks(props) {
    const [isOpen, setOpen] = useState(false);
    const links = mobileLandingPageLinks;

    return (
        
        <div className={styles.navLinksContainer}>
            <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
            {isOpen && (
            <ul className={styles.linksWrapper}>
                { links.map(item => 
                    <li className={styles.linkItem} key={item.title}> 
                        <Link href={item.href}>
                            <a className={styles.link}>{item.title}</a>
                        </Link>
                    </li> 
                )}
                <Marginer margin="2em"/>
            </ul>
            )}
        </div>
    );
  }