import styles from './navLinks.module.css'
import React, { useState } from "react";
import Link from 'next/link'
import { landingPagelinks, appLinks } from './navLinkData';

export function NavLinks(props) {
    const links = props.isAuthenticated ? appLinks : landingPagelinks;

    return (
        <div className={styles.navLinksContainer}>
            <ul className={styles.linksWrapper}>
                { links.map(item => 
                    <li className={styles.linkItem} key={item.title}> 
                        <Link href={item.href}>
                            <a className={styles.link}>{item.title}</a>
                        </Link>
                    </li> 
                )}

            </ul>
        </div>
    );
}