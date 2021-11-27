import { Element, scroller } from "react-scroll";
import Tilt from 'react-parallax-tilt';
import styles from './keypointSection.module.css';
import { GlassCard } from '../../components/glassCard'
import { DownArrow } from '../../components/downArrow/downArrow';
import { MarbaleBall } from '../../components/marbleBall';
import { keypoints } from './keypointData';
import { Carousel } from 'antd';
import Slider from "react-slick";
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
                    <div className={styles.marbleWrapper}>
                        {  keypoints.map( (item, idx) => (
                            <div key={item.key} style={{"--i": idx}}>
                                <MarbaleBall key={item.key} color={item.color} icon={item.icon} customStyles={item.styles}/>
                            </div>
                        ))}
                    </div>

                    <div className={styles.cardWrapper}>
                        <Tilt>
                        <GlassCard />
                        </Tilt>
                        {/* <Carousel>
                        {  keypoints.map( (item, idx) => (
                                <div key={item.key} style={{"--i": idx}}>
                                    <GlassCard header={item.header} content={item.content}/>
                                </div>
                        ))}
                        </Carousel> */}

                    </div>
                    
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
