import styles from './menuDropDown.module.css';
import Link from 'next/link';
import { menuLinks } from './navLinkData';
import { useMoralis } from 'react-moralis';
import { useMoralisDapp } from '../../providers/MoralisDappProvider/MoralisDappProvider';
import { getEllipsisTxt } from '../../utils/helpers';

export function MenuDropDown(props) {
  const { authenticate, isAuthenticated, logout } = useMoralis();
  const { walletAddress, chainId } = useMoralisDapp();
  return (
    <ul className={styles.menu}>
      {menuLinks.map((item, i) => (
        <li
          onClick={() => {
            if (item.wallet && isAuthenticated) {
              logout();
            } else if (item.wallet && !isAuthenticated) {
              authenticate({ signingMessage: 'Sign in to benevolent moon' });
            }
          }}
          className={styles.linkItem}
          key={item.title}
        >
          <Link href={item.href}>
            <a className={styles.link}>
              {isAuthenticated && item.wallet
                ? getEllipsisTxt(walletAddress, 6)
                : item.title}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
