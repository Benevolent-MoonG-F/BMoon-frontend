import Image from 'next/image';
import { Element, scroller } from "react-scroll";
import styles from './keypointSection.module.css';
import { GlassCard } from '../../components/glassCard'
import { DownArrow } from '../../components/downArrow/downArrow';
export function KeypointSection(props) {

    const scrollToNextSection = () => {
        scroller.scrollTo("whyUsSection", { smooth: true, duration: 1300 });
    };
    return (
        <Element name="keypointSection" >
            <div className={styles.container}>
                <div className={styles.color}></div>
                <div className={styles.color}></div>
                <div className={styles.color}></div>
                <div className={styles.box}>
                   <div className={styles.square} style={{"--i": 0}}></div>
                    <div className={styles.square} style={{"--i": 1}}></div>
                    <div className={styles.square} style={{"--i": 2}}></div>
                    <div className={styles.square} style={{"--i": 3}}></div>
                    <div className={styles.square} style={{"--i": 4}}></div>
        
                </div>
                <div className={styles.content}> 
                    <GlassCard />
                </div>

                <div 
                    className={styles.downArrowContainer}
                    onClick={scrollToNextSection}
                >
                    <DownArrow/>
                </div>
            </div>
        </Element>
    );
}
