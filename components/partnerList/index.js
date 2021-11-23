import styles from './index.module.css';
import PolygonLogo from '../../public/images/polygon-logo.svg';
import ChainlinkLogo from '../../public/images/chainlink-logo.svg';
// import MoralisLogo from '../../public/images';
import Image from 'next/image';
const tools = [
    {
        title: 'Chainlink',
        logo: {
            src: ChainlinkLogo,
            width: 170,
            height: 55,
        },
    },
    {
        title: 'Moralis',
        logo: {
            src: ChainlinkLogo,
            width: 170,
            height: 55,
        },
    },
    {
        title: 'Superfluid',
        logo: {
            src: ChainlinkLogo,
            width: 170,
            height: 55,
        },
    },
    {
        title: 'Polygon',
        logo: {
            src: PolygonLogo,
            width: 170,
            height: 50,
        },
    },

]
export function PartnerList(props) {

    return (
        <div className={styles.partners}>
             
        { tools.map( item => 
            <li key={item.title}>
                <Image src={item.logo?.src} width={item.logo?.width} height={item.logo?.height} alt=""/>
            </li>  
        )}    
        </div>
    );
}