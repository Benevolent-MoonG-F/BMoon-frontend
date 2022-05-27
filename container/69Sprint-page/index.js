import styles from "./index.module.css";
import {Print69} from "../../components/69Sprint-games/index";

export function PrintPage(){
    return(
        <div className={styles.main}>
        <div className={styles.wrapper}>
           <Print69/>
        </div>
      </div>
    )
}