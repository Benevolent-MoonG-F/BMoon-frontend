import styles from './menuDropDown.module.css'
import Link from 'next/link'
import { menuLinks } from './navLinkData';

export function MenuDropDown(props) {

    return (

            <ul className={styles.menu}>
                { menuLinks.map(item => 
                    <li className={styles.linkItem} key={item.title}> 
                        <Link href={item.href}>
                            <a className={styles.link}>{item.title}</a>
                        </Link>
                    </li> 
                )}
            </ul>

    );
}