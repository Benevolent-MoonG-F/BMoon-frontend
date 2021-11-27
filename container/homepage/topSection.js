import Image from 'next/image'
import { useMediaQuery } from "react-responsive";
import { DevicesSize } from "../../components/responsive";
import { Element, scroller } from "react-scroll";
import { Navbar } from '../../components/navbar'
import { Marginer } from '../../components/marginer'
import { Button } from '../../components/button';
import styles from './topSection.module.css';
import LandingImg from '../../public/images/landing.png'
import { theme } from '../../components/theme';
import { DownArrow } from '../../components/downArrow/downArrow';
import { PartnerList } from '../../components/partnerList';
import Tilt from 'react-parallax-tilt';
import Link from 'next/link'

const appLink = '/app/new-game';

export function TopSection(props) {
    const isMobile = useMediaQuery({ maxWidth: DevicesSize.mobile });

    const imgSize = isMobile ? { w: '150', h: '180' } : { w: '330', h: '380'}
    const marginLeft = isMobile ? "10px" : "20px";

    

    const scrollToNextSection = () => {
        scroller.scrollTo("keypointSection", { smooth: true, duration: 1300 });
    };
    return (
        <Element name="topSection">
            <div className={styles.container}>
                <div className={styles.wrapper}>

                    <div className={styles.leftContent}>
                        <h1> 
                            <span style={{color: theme.green}}>Bring Your</span>
                            <span style={{color: theme.yellow, marginLeft: marginLeft}}>Vision</span> 
                        </h1>
                        <h1> 
                            <span style={{color: theme.green}}>To The</span>
                            <span style={{color: theme.yellow, marginLeft: marginLeft}}>Crypto Markets</span> 
                        </h1>
                        <h4>A decentralized cryptocurrency prediction marketplace</h4>
                       
                        <div className={styles.btnContainer}> 
                        <Button href={appLink}
                            btnClassName={styles.btnWrapper}
                            linkClassName={styles.btnText}
                        >Enter App</Button>
                        </div>
                    </div>

                    {true && 
                    <Tilt> 
                        <div className={styles.rightContent}>
                            <Image
                                src={LandingImg}
                                height={imgSize.h}
                                width={imgSize.w}
                                alt="Bring your vision to the crypto markets"    
                            />
                        </div>
                    </Tilt>
                    } 

                </div>
            </div>
                <div className={styles.partnerListContainer}>
                    <PartnerList />
                </div>
                <div 
                    className={styles.downArrowContainer}
                    onClick={scrollToNextSection}
                >
                    <DownArrow/>
                </div>
                
        
        </Element>
    );
}