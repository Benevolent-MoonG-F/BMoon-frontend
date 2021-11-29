import styles from './menuDropDown.module.css';
import Link from 'next/link';
import { menuLinks } from './navLinkData';
import { useMoralis, useWeb3Contract } from 'react-moralis';
import { useMoralisDapp } from '../../providers/MoralisDappProvider/MoralisDappProvider';
import { getEllipsisTxt } from '../../utils/helpers';
import usdcabi from '../../utils/abis/usdc.json';

export function MenuDropDown(props) {
  const { authenticate, isAuthenticated, logout } = useMoralis();
  const { runContractFunction, contractResponse, error, isRunning, isLoading } =
    useWeb3Contract({
      abi: usdcabi,
      contractAddress: '0x326C977E6efc84E512bB9C30f76E30c160eD06FB',
      functionName: 'approve',
      params: {
        _spender: '0xaEBC5E5aC2Ad8680978Ce11d03048A4E2889DEbA',
        _value: '0',
      },
    });
  const { walletAddress, chainId } = useMoralisDapp();
  return (
    <div className={styles.menu}>
      
      {menuLinks.map((item, i) => (
        <div
          onClick={() => {
            if (item.wallet && isAuthenticated) {
              logout();
            } else if (item.wallet && !isAuthenticated) {
              authenticate({ signingMessage: 'Sign in to benevolent moon' });
            } else if (item.whitepaper) {
              console.log('run contract');
              runContractFunction();
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
        </div>
      ))}
    </div>
  );
}
