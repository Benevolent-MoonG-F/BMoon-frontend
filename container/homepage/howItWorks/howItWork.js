import Image from 'next/image';
import { Element, scroller } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import { DevicesSize } from "../../../components/responsive";
import styles from './index.module.css';
import "bootstrap/dist/css/bootstrap.css";
import Prediction from '../../../public/images/prediction.svg';
import Donate from '../../../public/images/donate.svg';
import Alert from '../../../public/images/alert.svg';
import {Button} from '../../../components/button/index';

const content = `Our games allow users to make educated predictions about their favorite projects. When a user 
wins, they get their winnings sent to their wallet, while their vote for which charity will receive a donation is cast 
in a permissionless, trustless process. `;
const appLink = '/app/new-game';
export function HowItWorkSection(props) {

    const isMobile = useMediaQuery({ maxWidth: DevicesSize.mobile });
    const isTablet = useMediaQuery({ maxWidth: DevicesSize.tablet });
    const imgSize = isTablet ? {w: '180', h: '160'} : {w: '400', h: '400'}
    return (
        <Element name="howItWorksSection" className={styles.vectors}>
            <div className="container">
                <div className="row">
                    <span className={styles.gameRow}>
                    <h3>How It Works</h3>
                    </span>
                </div>
                <div className="row mb-1">
                    <div className="col-md-6">
                        <div className={`${styles.gameCard}`}>
                        <h5>01</h5>
                        <h6>Make educated predictions</h6>
                        <p>Our games allow users to make educated predictions about their favorite projects.</p> 
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div className={`${styles.games1}`}>
                    <Image src={Prediction}  alt="logo" className="img-fluid" height="500px" width="500px" /><br/>
                    </div>
                    </div>  
                </div><br/><br/>

                <div className="row mb-1">
                    <div className=" col-md-6 order-1">
                    <div className={`${styles.games}`}>
                    <Image src={Donate}  alt="logo" className="img-fluid" height="500px" width="500px" /><br/>
                    </div>
                    </div>  
                    <div className="col-md-6 order-md-1">
                        <div className={`${styles.gameCard}`}>
                        <h5>02</h5>
                        <h6>Vote for Benevolent Organization</h6>
                        <p>Each winner will get a button on their dashboard when they win to cast a vote for the monthly benevolent recipient of the whole charitable pot for the month.</p> 
                    </div>
                    </div>
                </div><br/><br/>

                <div className="row mb-1">
                    
                    <div className="col-md-6">
                        <div className={`${styles.gameCard}`}>
                        <h5>03</h5>
                        <h6>Receive payment</h6>
                        <p>When a user wins, they get their winnings sent to their wallet, and they get to vote for the charity of their choice for the monthly donation. <br/>This is a permissionless and trustless process. </p> 
                    </div>
                    </div>
                    <div className=" col-md-6">
                    <div className={`${styles.games}`}>
                    <Image src={Alert}  alt="logo" className="img-fluid" height="500px" width="500px" /><br/>
                    </div>
                    </div>  
                  
                    

                </div><br/><br/>
               
                {/* <div className={styles.color}></div>
                <div className={styles.color}></div>
                <div className={styles.color}></div> */}

                {/* <div className={styles.box}>
                   <div className={styles.square} style={{"--i": 0}}></div>
                    <div className={styles.square} style={{"--i": 1}}></div>
                    <div className={styles.square} style={{"--i": 2}}></div>
                    <div className={styles.square} style={{"--i": 3}}></div>
                    <div className={styles.square} style={{"--i": 4}}></div>
        
                </div> */}
                {/* <div className={styles.wrapper}>
                    <h2>How It Works</h2>
                    
                    <div className={styles.contentWrapper}>
                        
                      
                            <div className={styles.img}>
                                <Image src={Img} width={imgSize.w} height={imgSize.h} />
                            </div>
                            
                        
                            <GlassCard content={content} className={styles.GlassCard}/>
                          
                 
                    </div>
                </div> */}
            </div>
        </Element>
    );
}
