import { useMediaQuery } from "react-responsive";
import { DevicesSize } from "../responsive";
import { Logo }from '../logo/index';
import { NavLinks } from './navLinks';
import { Menu } from './menu';
import { MobileMenu} from './mobile/mobileMenu';
import styles from './index.module.css';

export function Navbar(props) {
    const isTablet = useMediaQuery({ maxWidth: DevicesSize.tablet });

    return(
        <div className={styles.container}>
            <div className={styles.leftSection}>
                <Logo />
            </div>
            <div className={styles.midSection}>
                {!isTablet && <NavLinks />}
            </div>
            <div className={styles.rightSection}>
                {!isTablet ? <Menu/> : <MobileMenu/> }
            </div>
        </div>
    ) 
}