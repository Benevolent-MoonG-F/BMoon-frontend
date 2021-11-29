import styles from './menu.module.css';
import React, { useState } from "react";
import { MenuDropDown } from './menuDropDown';

export function Menu(props) {
    const [isOpened, setIsOpened] = useState(false);
    const handleBtn = () => {
        setIsOpened(prev => !(prev))
    }
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