
import "bootstrap/dist/css/bootstrap.css";
import styles from "./footer.module.css"
import { FaDiscord, FaTwitter, FaTelegram } from 'react-icons/fa';
export function Footer() {
    return(
        <div className={styles.footer}>
           <footer className=" text-white">
            <div className="container">
                
                <div className="row">
                <div className="col">
                    <hr className="text-black"/>
                </div>
                </div>
                <div className="row text-secondary">
                <div className="col-md-4 text-lg-right order-md-2">
                <p className={styles.paragraph2}>Built with Moralis, Superfluid, Polygon & ChainLink</p>
          
                </div>
                <div className="col-md-4 text-center order-md-2 mx-auto">
                    <ul className="text-center">
                    <li className="nav-item">
                        <a className="nav-link text-black" href="#">
                        <FaDiscord className={styles.facebook} />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-black" href="#">
                            <FaTwitter className={styles.twitter}/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-black" href="#">
                            <FaTelegram className={styles.linkedin}/>
                        </a>
                    </li>
                    </ul>
                </div>
               
                <div className="col-md-4 order-md-1 text-white">
                   
                    <p>Copyrights © 2022</p>
                   
                    </div>
                </div>
            </div>
</footer>
        </div>
    );
}