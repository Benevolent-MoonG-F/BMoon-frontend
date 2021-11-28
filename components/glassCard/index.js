
import styles from './index.module.css'

export function GlassCard(props) {
    const { headline, content } = props;
    return (

            <div className={styles.card}>
                <div className={styles.content}>
                    {headline && <h2>{headline}</h2>}
                    <p> {content}</p>
                </div>
            </div>

    );
}