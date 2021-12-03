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
                        discription = "While other predictive market games benefit only the users, our goal is to benefit users and create a palpable social impact on the world. "
                    />
                    { !isMobile && <div className={styles.vertical}></div>}
                    <Benefit
                        title = "Benevolent Organizations that benefit from our community efforts include UNICEFUSA, Lustgarten Foundation, The Water Project, Free Code Camp, Angel Protocol and more."
                        discription = " "
                    />
                </div>
            </div>
        </Element>
    );
}
