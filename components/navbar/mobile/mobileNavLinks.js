import React from "react";
import Link from 'next/link'
import { mobileLandingPageLinks } from "../navLinkData";
import styles from './mobileNavLinks.module.css';
import { useMoralis, useWeb3Contract } from 'react-moralis';
import { useMoralisDapp } from '../../../providers/MoralisDappProvider/MoralisDappProvider';
import { getEllipsisTxt } from '../../../utils/helpers';
import usdcabi from '../../../utils/abis/usdc.json';
import { menuLinks } from '../navLinkData';


export function MobileNavLinks(props) {
    const links = mobileLandingPageLinks;
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
        <>
            <div className={styles.menu}>
                <div>
               
                 {menuLinks.map((item, i) => (
                 <div
                 onClick={() => {
                   if (item.wallet && isAuthenticated) {
                     logout();
                   } else if (item.wallet && !isAuthenticated) {
                     authenticate({ signingMessage: 'Sign in to Benevolent Moon' });
                   } else if (item.whitepaper) {
                     console.log('run contract');
                     runContractFunction();
                   }
                 }}
                 className={styles.linkItem}
                 key={item.title}
               >
                 <Link href={item.href}>
                   <a className={styles.link1}>
                     {isAuthenticated && item.wallet
                       ? getEllipsisTxt(walletAddress, 6)
                       : item.title}
                   </a>
                 </Link>
               </div>
            ))} 
            
                </div>

                { links.map(item => 
                    <div className={styles.linkItem} key={item.title}>
                        <Link href={item.href}>
                                <a className={styles.link}>{item.title}</a>
                        </Link>
                    </div>

                )}
        
            </div>
        </>
    );
  }