import Image from 'next/image'
import "bootstrap/dist/css/bootstrap.css";
import styles from "./footer.module.css"
import Logo from "../../public/images/logo.png"
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
                <div className="row gutter-0 gutter-lg-6 text-secondary">
                <div className="col-md-3 text-lg-right order-md-2"></div>
                <div className="col-md-6 text-center order-md-2">
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
               
                <div className="col-md-3 order-md-1">
                    <p>Copyrights © 2021</p>
                </div>
                </div>
            </div>
</footer>
        </div>
    );
}