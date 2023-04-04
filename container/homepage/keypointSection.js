import { Element, scroller } from "react-scroll";
import styles from './keypointSection.module.css';
import { GlassCard } from '../../components/glassCard'
import { keypoints } from './keypointData';
import "bootstrap/dist/css/bootstrap.css";


export function KeypointSection(props) {

    const scrollToNextSection = () => {
        scroller.scrollTo("howItWorksSection", { smooth: true, duration: 1300 });
    };

    return (
        <Element name="keypointSection" >
          
            {/* <PartnerList /> */}
          
  
            <div className={`${styles.container2} container`}>           
                    <div className="row">
            
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
        </Element>
    );
}
