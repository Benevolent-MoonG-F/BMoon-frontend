import { TopSection } from "./topSection";
import { Marginer } from "../../components/marginer";
import { KeypointSection } from "./keypointSection";
import styles from "./index.module.css";
import { WhyUsSection } from "./whyUsSection";

export function HomePage(props) {
    return (
        <div className={styles.container}>
            <TopSection />
            <KeypointSection />
            <WhyUsSection />
        </div>
    );
}