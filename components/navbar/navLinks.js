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
                    <Link href={item.href} className={styles.linkItem} key={item.title}>
                        <a className={styles.linkItem}>{item.title}</a>
                    </Link>
                )}

            </ul>
        </div>
    );
}