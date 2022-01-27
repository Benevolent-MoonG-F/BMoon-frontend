import Image from 'next/image';
import styles from './index.module.css';
import MoralisLogo from '../../public/images/Moralis Logo_Light_Large.png';
import SuperfluidLogo from '../../public/images/superfluid-logo.png';
import "bootstrap/dist/css/bootstrap.css";
import LINK from '../../public/images/link.png';
import MATIC from '../../public/images/matic.png'

export function PartnerList(props) {

    return (

        <div className={`${styles.logoContainer} container-fluid`}>

            <div className="row">
            <div className='col-12'>
                <h3 className='text-white text-center'>Partners</h3>
                            
                </div>


                <div className='col-12 text-center pt-2'>   
                        <span className= {`${styles.img1} pe-5 pb-5`}>
                            <Image alt="BTC" src={MoralisLogo} className={`${styles.tokenImg} img-fluid`} />
                                
                            </span>

                            <span className={`${styles.img2} pe-5 pb-5`}>
                            <Image alt="Eth" src={SuperfluidLogo} className={`${styles.tokenImg} img-fluid`} />
                             
                            </span>

                            <span className={`${styles.img3} pe-5 pb-5`}>
                            <Image alt="Link" src={LINK} className={`${styles.tokenImg} img-fluid`} />
                          
                            </span>

                            <span className={`${styles.img4} pe-5 pb-5`}>
                            <Image alt="Matic" src={MATIC} className={`${styles.tokenImg} img-fluid`}/>
                             
                            </span>
                        </div>
            </div>
        </div>
    );
}