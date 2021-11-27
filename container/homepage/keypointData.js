import GlobalIcon from '../../public/images/global-access.png'
import BlockchainIcon from '../../public/images/blockchain.png'
import SecurityIcon from '../../public/images/security.png'
import BitcoinIcon from '../../public/images/bitcoin.png'

const keypoints = [
    {
        id: 0,
        headline: 'Highly Secured',
        content: `A fun crypto prognostication game that takes predictive markets to a more exciting  level
        - Call the date and time of your favorite token doing a Moon Shot, win the pot while also directing a 
        charitable donation to the organization of your choice from our list of benevolent partners.`,
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
        id: 1,
        headline: 'Global Access',
        content: `For a more immediate gratification, the Daily Rocket has a winner every day!  
        Correctly predict the closing price of your favorite tokens (UTC close of day) and win the pot, 
        while again choosing which benevolent cause receives a donation.`,
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
        id: 2,
        headline: 'Charity',
        content: `The BMSDAO is an essential component to bringing the vision, mission, and values of the project to 
        full fruition.   As a community-centric, community-galvanizing project, the governance and growth by our $BMS 
        family is central to a successful journey`,
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
        id: 3,
        headline: 'Fun-focused',
        content: `Benevolent Moon Gaming & Finance will mint the $BMS token which will be central to all mission-driven
        unities.   Further, lending, borrowing, and yield farming instruments are in development to increasingly
        serve our users, and our benevolent partners as a piece of all transactions on the protocol will go to charity.`,
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
        id: 4,
        headline: 'Community Centric',
        content: `for V2, we will have periodic lottery drawings for all users to win fresh #NFTs from emerging artists.
        line with our values, we will openly promote the arts and culture of the world community, provide our users with a 
        ce to display their collection, and opportunities to trade #NFTs.  Further, in development are Degen Moon Games, 
        Lunar Fantasy Sports, Learn2Earn games. COMING SOON `,
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
    
    },
];

export { keypoints };