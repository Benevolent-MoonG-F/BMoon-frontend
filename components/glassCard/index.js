
import styles from './index.module.css'
import Carousel from "react-material-ui-carousel";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
export function GlassCard(props) {
    const { headline, content } = props;
    return (

            <div className={styles.card}>
                <div className={styles.content}>
                    {headline && <h2>{headline}</h2>}
                    <p> {content}</p>
                    {props.children}
                    {/* <Carousel
                        autoPlay
                    >
                            <Grid 
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <div>ETH Price</div>
                            </Grid>

                            <Grid 
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <div>BTC Price</div>
                            </Grid>
                        </Carousel> */}
                </div>
            </div>

    );
}