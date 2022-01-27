import styles from './index.module.css';
export function PrizesBanner(props) {
  

  const { className } = props;
  console.log(className);
  return (
    <div className={className}>
      <div className={styles.textContainer}>
        <h1 style={{ textAlign: 'center', fontSize: '40px' }}>$1000</h1>
        <h3 style={{ textAlign: 'center' }}>In Daily Pot</h3>
      </div>
    </div>
  );
}
