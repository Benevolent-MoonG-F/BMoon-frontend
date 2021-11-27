import { Carousel } from 'antd';
import styles from './index.module.css'
import { keypoints } from '../../container/homepage/keypointData'
export function GlassCard(props) {
    const { headline, content, ...others} = keypoints[0];
    return (

            <div className={styles.card}>
                <div className={styles.content}>
                    <h2>{headline}</h2>
                    <p> {content}</p>
                </div>
            </div>

    );
}