import styles from "./index.module.css";
import {Assets} from "./assets";
import logo from "../../public/images/69print.png";
import Image from 'next/image';
export function Print69(){
    return(
        <div className={styles.main}>
        <div className="container">

        <div className="row">
            <div className="text-center">
                <div className={styles.header}>
                    <h1>69 Sprint</h1>
                <Image alt="logo" src={logo}/>
                <h5>Put your predictive market prognostication skills to the test with Benevolent Moon’s newest charity generating fun game. </h5>
                <h6> Correctly predict the order of tokens in the 6-9 slots of the CoinMarketCap top 10 rankings and win.</h6>
                </div>
            </div>

       
           
                 <div className="col-md-3 text-center">
                 <select className={styles.selectBtn} >
                    {Assets.map((asset) => (
                        <option  key={asset.label} value={asset.symbol}>{asset.label}</option>
                    ))}
                    </select>
                 </div>
                 <div className="col-md-3 text-center">
                 <select className={styles.selectBtn} >
                    {Assets.map((asset) => (
                        <option key={asset.label} value={asset.symbol}>{asset.label}</option>
                    ))}
                    </select>
                 </div>
                 <div className="col-md-3 text-center">
                 <select className={styles.selectBtn} >
                    {Assets.map((asset) => (
                        <option key={asset.label} value={asset.symbol}>{asset.label}</option>
                    ))}
                    </select>
                 </div>
           
       
               
                        <div className="col-md-3 text-center">
                        <select className={styles.selectBtn} >
                    {Assets.map((asset) => (
                        <option key={asset.label} value={asset.symbol}>{asset.label}</option>
                    ))}
                    </select>
                        </div>
                        </div>
                  
       
     </div>
        </div>
       
    )
}