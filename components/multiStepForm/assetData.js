import BitcoinLogo from '../../public/images/bitcoin.png';
import EthLogo from '../../public/images/eth.png';
import MaticLogo from '../../public/images/matic.png';
import OneLogo from '../../public/images/one.png';
import LinkLogo from '../../public/images/link.png';
import LunaLogo from '../../public/images/luna.png';
import AdaLogo from '../../public/images/ada.png';
import AvaxLogo from '../../public/images/avax.png';
import SolanaLogo from "../../public/images/solana.svg"


const topAssets = [
  {
    label: 'Bitcoin',
    id: 1,
    logo: BitcoinLogo,
    currentPrice: '58,000.5',
    symbol: 'BTC',
  },
  {
    label: 'Ethereum',
    id: 2,
    logo: EthLogo,
    currentPrice: 200,
    symbol: 'ETH',
  },
  {
    label: 'Matic',
    id: 3,
    logo: MaticLogo,
    currentPrice: 3800.33,
    symbol: 'MATIC',
  },
  // {
  //   label: 'One',
  //   id: 4,
  //   logo: OneLogo,
  //   currentPrice: 100,
  //   symbol: 'ONE',
  // },
  {
    label: 'Link',
    id: 4,
    logo: LinkLogo,
    currentPrice: 200,
    symbol: 'LINK',
  },
  {
    label: 'Solana',
    id: 5,
    logo: SolanaLogo,
    currentPrice: 30,
    symbol: 'SOL',
  },
  // {
  //   label: 'Luna',
  //   id: 6,
  //   logo: LunaLogo,
  //   currentPrice: 300,
  //   symbol: 'LUNA',
  // },
  // {
  //   label: 'Ada',
  //   id: 7,
  //   logo: AdaLogo,
  //   currentPrice: 200,
  //   symbol: 'ADA',
  // },
  // {
  //   label: 'Avax',
  //   id: 8,
  //   logo: AvaxLogo,
  //   currentPrice: 300,
  //   symbol: 'AVAX',
  // },
];



export { topAssets };
