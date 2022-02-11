import styles from './dao.module.css';
import "bootstrap/dist/css/bootstrap.css";
import {Element} from 'react-scroll';


export function Dao(){
    return(
        <Element className={styles.main}>
            <div className='container'>
                <div className='row'>
                <h1>dao</h1>
                </div>
            </div>
        </Element>
    )
};