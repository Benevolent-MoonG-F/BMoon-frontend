import styles from './index.module.css'

export function GlassCard(props) {
    return (

            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.content}>
                        <h2>Fast Payout</h2>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing 
                            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>

    );
}