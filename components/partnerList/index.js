import Image from 'next/image';
import styles from './index.module.css';
import PolygonLogo from '../../public/images/polygon-logo.svg';
import ChainlinkLogo from '../../public/images/chainlink-logo.svg';
import MoralisLogo from '../../public/images/moralis-logo.png';
import SuperfluidLogo from '../../public/images/superfluid-logo.png';

const tools = [
    {
        title: 'Chainlink',
        logo: {
            src: ChainlinkLogo,
            width: 180,
            height: 60,
        },
    },
    {
        title: 'Moralis',
        logo: {
            src: MoralisLogo,
            width: 172,
            height: 32,
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
    {
        title: 'Superfluid',
        logo: {
            src: SuperfluidLogo,
            width: 190,
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