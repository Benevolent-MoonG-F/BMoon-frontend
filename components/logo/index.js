import Link from 'next/link'
import styles from "./index.module.css"
import Image from 'next/image'
import { theme } from "../theme"
import BMLogoImg from '../../public/images/logo.png'

export function Logo(props) {
    return (
        <Link href="/">
            <a className={styles.logoWrapper}> 

                <div className={styles.logoImage}>
                    <Image
                        src={BMLogoImg}
                        height={200}
                        width={200}
                        alt="Benevolent Moon logo"
                    />
                </div>
            
                <h2 className={styles.logoText}> 
                    <span style= {{color: theme.white }} >Benevolent</span> 
                    <span style= {{color: theme.yellow}}> Moon </span>
                </h2>
            </a>
        </Link>
    );
}  