import { Element, scroller } from "react-scroll";
import Tilt from 'react-parallax-tilt';
import styles from './keypointSection.module.css';
import { GlassCard } from '../../components/glassCard'
import { DownArrow } from '../../components/downArrow/downArrow';
import { MarbaleBall } from '../../components/marbleBall';
import { keypoints } from './keypointData';
import Carousel from "react-material-ui-carousel";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import "bootstrap/dist/css/bootstrap.css";
import { PartnerList } from "../../components/partnerList";


export function KeypointSection(props) {

    const scrollToNextSection = () => {
        scroller.scrollTo("howItWorksSection", { smooth: true, duration: 1300 });
    };

    return (
        <Element name="keypointSection" >
          
            {/* <PartnerList /> */}
          
  
            <div className={`${styles.container2} container-fluid`}>           
                    <div className="row">
                    {/* <div className={styles.marbleWrapper}>
                        {  keypoints.map( (item, idx) => (
                            <div key={item.key} style={{"--i": idx}}>
                                <MarbaleBall key={item.key} color={item.color} icon={item.icon} customStyles={item.styles}/>
                            </div>
                        ))}
                    </div> */}

                        <div className="col-md-6 mb-5">
                        <GlassCard headline={keypoints[0].headline} content={keypoints[0].content}>
                        </GlassCard>
                        </div>

                        <div className="col-md-6 mb-5">
                        <GlassCard headline={keypoints[2].headline} content={keypoints[2].content}>
                        </GlassCard>
                        </div>
                       
                    </div>
                
         
                   

                   
                       
                        

                </div>
               


                {/* <div 
                    className={styles.downArrowContainer}
                    onClick={scrollToNextSection}
                >
                    <DownArrow/>
                </div> */}
           



        </Element>
    );
}
