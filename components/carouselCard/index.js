import dynamic from 'next/dynamic';

const Carousel = dynamic(
  () => import ('react-material-ui-carousel'),
  {ssr: false}
)
import styles from './index.module.css';

export function CarouselCard(props) {
  const { indicators=true, navButtonsAlwaysVisible=false} = props;
    return (
        <Carousel
        animation="slide"
        indicators={indicators}
        navButtonsAlwaysVisible={navButtonsAlwaysVisible}
        navButtonsProps={{
          style: {
            // background: "#fff",
            // color: "#494949",
            // borderRadius: 0,
            // margin: 0,
          },
        }}
        
      >
        {props.children}             
      </Carousel>
    );
}