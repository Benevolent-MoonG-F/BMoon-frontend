import styles from './index.module.css';

export function Benefit(props) {
    const { title, discription } = props;
    
    return(
        <div className={styles.container}>
            <h2>{title}</h2>
            <p>{discription}</p>
        </div>
    );
} 