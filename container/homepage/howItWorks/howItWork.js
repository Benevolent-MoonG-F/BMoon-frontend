import Image from 'next/image';
import { Element, scroller } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import { DevicesSize } from "../../../components/responsive";
import { GlassCard } from "../../../components/glassCard";
import styles from './index.module.css';
import Img from '../../../public/images/howitworks.png'
const content = `Our games allow users to make educated predictions about their favorite projects. When a user 
wins, they get their winnings sent to their wallet, while a donation is sent to the organization of their choice 
in a permissionless, trustless process. `;
export function HowItWorkSection(props) {

    const isMobile = useMediaQuery({ maxWidth: DevicesSize.mobile });
    const isTablet = useMediaQuery({ maxWidth: DevicesSize.tablet });
    const imgSize = isTablet ? {w: '180', h: '160'} : {w: '400', h: '400'}
    return (
        <Element name="howItWorksSection">
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
                <div className={styles.wrapper}>
                    <h2>How It Works</h2>
                    
                    <div className={styles.contentWrapper}>
                        
                      
                            <div className={styles.img}>
                                <Image src={Img} width={imgSize.w} height={imgSize.h} />
                            </div>
                            
                        
                            <GlassCard content={content}/>
                 
                    </div>
                </div>
            </div>
        </Element>
    );
}