import styles from './whyUsSection.module.css'
import { Element, scroller } from "react-scroll";
import { Benefit } from '../../components/benefit';
import { useMediaQuery } from "react-responsive";
import { DevicesSize } from "../../components/responsive";
export function WhyUsSection(props) {
    const isMobile = useMediaQuery({ maxWidth: DevicesSize.mobile });
    return (
        <Element name="whyUsSection" >
            <div className={styles.container}>
                <h1>Why Us ? </h1>
                <div className={styles.box}>
                   <div className={styles.square} style={{"--i": 0}}></div>
                    <div className={styles.square} style={{"--i": 1}}></div>
                    <div className={styles.square} style={{"--i": 2}}></div>
                    <div className={styles.square} style={{"--i": 3}}></div>
                    <div className={styles.square} style={{"--i": 4}}></div>
        
                </div>
                <div className={styles.content}> 
                    <Benefit
                        title = "Benevolent Moon"
                        discription = " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    { !isMobile && <div className={styles.vertical}></div>}
                    <Benefit
                        title = "Others"
                        discription = " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                </div>
            </div>
        </Element>
    );
}