import Image from 'next/image';
import styles from './index.module.css';
import PolygonLogo from '../../public/images/polygon-logo.svg';
import ChainlinkLogo from '../../public/images/chainlink-logo.svg';
import MoralisLogo from '../../public/images/moralis-logo.png';
import SuperfluidLogo from '../../public/images/superfluid-logo.png';
import "bootstrap/dist/css/bootstrap.css";
// const tools = [
//     {
//         title: 'Chainlink',
//         logo: {
//             src: ChainlinkLogo,
//             width: 180,
//             height: 60,
//         },
//     },
//     {
//         title: 'Moralis',
//         logo: {
//             src: MoralisLogo,
//             width: 172,
//             height: 32,
//         },
//     },
//     {
//         title: 'Polygon',
//         logo: {
//             src: PolygonLogo,
//             width: 170,
//             height: 50,
//         },
//     },
//     {
//         title: 'Superfluid',
//         logo: {
//             src: SuperfluidLogo,
//             width: 190,
//             height: 50,
//         },
//     },


// ]
export function PartnerList(props) {

    return (
        // <div className={styles.partners}>
             
        // { tools.map( item => 
        //     <li key={item.title}>
        //         <Image src={item.logo?.src} width={item.logo?.width} height={item.logo?.height} alt=""/>
        //     </li>  
        // )}    
        // </div>
        <div className={`${styles.logoContainer} container-fluid`}>
            <div className="row">
                <div className="col-md-3 col-6">
                <Image src={PolygonLogo}  alt="logo" className={`${styles.logoImg} img-fluid`} width="200px" height="50px"/><br/>
     
                </div><br/><br/>
                <div className="col-md-3 col-6">
                <Image src={MoralisLogo}  alt="logo" className={`${styles.logoImg} img-fluid`} width="200px" height="40px"/><br/>
     
                    </div>
                    <div className="col-md-3 col-6">
                    <Image src={ChainlinkLogo}  alt="logo" className={`${styles.logoImg} img-fluid`} width="200px" height="50px"/><br/>
     
                    </div>
                    <div className="col-md-3 col-6">
                    <Image src={SuperfluidLogo}  alt="logo" className={`${styles.logoImg} img-fluid`} width="200px" height="50px"/><br/>
     
                    </div>
            </div>
        </div>
    );
}