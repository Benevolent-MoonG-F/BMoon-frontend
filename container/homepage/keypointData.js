import GlobalIcon from '../../public/images/global-access.png'
import BlockchainIcon from '../../public/images/blockchain.png'
import SecurityIcon from '../../public/images/security.png'
import BitcoinIcon from '../../public/images/bitcoin.png'

const keypoints = [
    {
        id: 0,
        headline: 'Highly Secured',
        content: `In the blockchain space, a security-focused approach protects our users  allowing them to enjoy a positive experience with all of our products with a comfort and peace of mind that they are protected by strong smart contract coded safeguards.`,
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
        headline: 'Benevolent Mission',
        content: `Our mission, as it is stated in our name, is to pursue all we do with benevolent intent.  
        This objective has many layers, and we believe our reach and social impact will only grow as our community 
        offers its voice via our DAO.  Healing the world is at the core of who we are. `,
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
        headline: 'Fun-Focused',
        content: `Another central value of BMG&F is to provide a fun experience for our users. People spend a tremendous amount of time, money, and energy seeking fun activities in their lives- thus it a priority to make our offerings joyful  
        `,
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
        headline: 'Community Centric',
        content: `All of our products are born from the community experience that has brought us together as a team, and has had 
        an emotionally positive palpable effect on our lives.   We built this project for the global community, to provide joy, 
        help heal the world where it needs, and bring people together.  Further,  our BMS DAO will ultimately render this 
        project a completely community governed entity.`,
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
        headline: 'Financial Opportunities',
        content: `All of our products will also provide for our community varied opportunities to grow financial wealth. 
        The variety of activities will appeal to a very wide usership, from gamers, to predictive market enthusiasts, 
        to NFT collectors, and Defi-Degens.  United by a community led DAO, we will continue to explore opportunities 
        to serve our community in the area of financial growth.`,
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
    {
        id: 5,
        headline: 'Benevolent Moon Squares',
        content: `A fun crypto prognostication game that takes predictive markets to a more exciting  level- Call the date and time of your favorite token doing a Moon Shot.`,
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
];

export { keypoints };