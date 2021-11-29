import styles from './index.module.css';
import { useAPIContract } from 'react-moralis';
export function PrizesBanner(props) {
  // const { runContractFunction, data, error, isLoading, isFetching } =
  //   useAPIContract({
  //     abi: usdcEthPoolAbi,
  //     address: usdcEthPoolAddress,
  //     functionName: 'observe',
  //     params: {
  //       secondsAgos: [0, 10],
  //     },
  //   });

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
