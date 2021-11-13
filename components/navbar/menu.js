import styles from './menu.module.css';
import React, { useState } from "react";
import { MenuDropDown } from './menuDropDown';

export function Menu(props) {
    const { isOpened, handleBtn } = props;
    return (
        <div className={styles.container}> 
            <button className={styles.menuBtn} onClick={handleBtn} >
                <a>Menu</a>
            </button>
            { isOpened && 
                <MenuDropDown />
            }
        </div>
    );
}