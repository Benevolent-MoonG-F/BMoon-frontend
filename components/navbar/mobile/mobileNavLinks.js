import React from "react";
import Link from 'next/link'
import { mobileLandingPageLinks } from "../navLinkData";
import styles from './mobileNavLinks.module.css'

export function MobileNavLinks(props) {
    const links = mobileLandingPageLinks;

    return (
        <>
            <div className={styles.menu}>
                { links.map(item => 
                    <div className={styles.linkItem} key={item.title}>
                        <Link href={item.href}>
                                <a className={styles.link}>{item.title}</a>
                        </Link>
                    </div>

                )}
        
            </div>
        </>
    );
  }