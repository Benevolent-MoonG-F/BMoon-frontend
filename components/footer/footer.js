import Image from 'next/image'
import "bootstrap/dist/css/bootstrap.css";
import styles from "./footer.module.css"
import Logo from "../../public/images/logo.png"

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
                <div className="col-md-6 text-lg-right order-md-2">
                    <ul>
                    <li className="nav-item">
                        <a className="nav-link text-black" href="#">facebook</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-black" href="#">twitter</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-black" href="#">linkedin</a>
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