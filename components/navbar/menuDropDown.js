import styles from './menuDropDown.module.css'
import Link from 'next/link'
import { Marginer } from "../marginer";

export function MenuDropDown(props) {

    return (

            <ul className={styles.menu}>
                <li> 
                    <Link href="#">
                        <a>Connect Wallet</a>
                    </Link>
                </li>
                
                <li> 
                    <Link href="#">
                        <a>Whitepaper</a>
                    </Link>
                </li>
                            
                <li> 
                    <Link href="#">
                        <a>Developers</a>
                    </Link>
                </li>
                {/* <Marginer margin="2em"/>
                <Menu /> */}
            </ul>

    );
}