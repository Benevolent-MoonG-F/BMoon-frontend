import Image from 'next/image';
import { Element, scroller } from "react-scroll";
import styles from './keypointSection.module.css';
import { GlassCard } from '../../components/glassCard'
import { DownArrow } from '../../components/downArrow/downArrow';
import { MarbaleBall } from '../../components/marbleBall';
import GlobalIcon from '../../public/images/global-access.png'
import BlockchainIcon from '../../public/images/blockchain.png'
import SecurityIcon from '../../public/images/security.png'
import BitcoinIcon from '../../public/images/bitcoin.png'

const keypoints = [
    {
        key: "global",
        color: "yellow",
        icon: GlobalIcon,
        styles: {
            out: {
                background: `linear-gradient(#e7e7e6 0%, #f8f9e0 10%,  #fbfcae 50%, #f8fb00 100%)`,
                top: 170,
            },
            inner: {
                background: `linear-gradient(#e7e7e6 10%, #fbfcae 50%, #f8fb00 100%)`,

            }
        }
    },
    {
        key: "blockchain",
        color: "yellow",
        icon: BlockchainIcon,
        styles: {
            out: {
                background: `linear-gradient(#e7e7e6 0%, #e8eaff 10%,  #434f81 55%, #263884 100%)`,
                top: 60,
            },
            inner: {
                background: `linear-gradient(#e7e7e6 15%, #434f81 45%, #263884 100%)`,
                
            }

        }
    },
    {
        key: "global",
        color: "yellow",
        icon: GlobalIcon,
        styles: {
            out: {
                background: `linear-gradient(#e7e7e6 0%, #f8f9e0 10%,  #fbfcae 50%, #f8fb00 100%)`,
                // top: 20
            },
            inner: {
                background: `linear-gradient(#e7e7e6 10%, #fbfcae 50%, #f8fb00 100%)`,
                
            }

        }
    },
    {
        key: "bitcoin",
        color: "yellow",
        icon: BitcoinIcon,
        styles: {
            out: {
                background: `linear-gradient(#e7e7e6 0%, #f8f9e0 10%,  #fbfcae 50%, #f8fb00 100%)`,
                top: 60,
            },
            inner: {
                background: `linear-gradient(#e7e7e6 10%, #fbfcae 50%, #f8fb00 100%)`,
                
            }

        }
    },
    {
        key: "global",
        color: "yellow",
        icon: SecurityIcon,
        styles: {
            out: {
                background: `linear-gradient(#e7e7e6 0%, #f8f9e0 10%,  #fbfcae 50%, #f8fb00 100%)`,
                top: 170,
            },
            inner: {
                background: `linear-gradient(#e7e7e6 10%, #fbfcae 50%, #f8fb00 100%)`,
                
            }

        }
    }

]
export function KeypointSection(props) {

    const scrollToNextSection = () => {
        scroller.scrollTo("whyUsSection", { smooth: true, duration: 1300 });
    };
    return (
        <Element name="keypointSection" >
            <div className={styles.container}>
                <div className={styles.color}></div>
                <div className={styles.color}></div>
                <div className={styles.color}></div>
                <div className={styles.box}>
                   <div className={styles.square} style={{"--i": 0}}></div>
                    <div className={styles.square} style={{"--i": 1}}></div>
                    <div className={styles.square} style={{"--i": 2}}></div>
                    <div className={styles.square} style={{"--i": 3}}></div>
                    <div className={styles.square} style={{"--i": 4}}></div>
        
                </div>
                <div className={styles.content}> 
                    <div className={styles.marbleWrapper}>
                        {  keypoints.map( item => (
                        <MarbaleBall key={item.key} color={item.color} icon={item.icon} customStyles={item.styles}/>
                        ))}
                    </div>
                    <GlassCard />
                </div>

                <div 
                    className={styles.downArrowContainer}
                    onClick={scrollToNextSection}
                >
                    <DownArrow/>
                </div>
            </div>
        </Element>
    );
}
