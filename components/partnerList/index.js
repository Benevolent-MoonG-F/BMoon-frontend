import styles from './index.module.css';

const tools = [
    {
        title: 'Chainlink',
        logo: null,
    },
    {
        title: 'Superfluid',
        logo: null,
    },
    {
        title: 'Moralis',
        logo: null,
    },
    {
        title: 'Chainlink',
        logo: null,
    },
    {
        title: 'Chainlink',
        logo: null,
    }
]
export function PartnerList(props) {

    return (
        <div className={styles.partners}>
             
        { tools.map( item => <li key={item.title}>{item.title}</li>  )}
            
        </div>
    );
}