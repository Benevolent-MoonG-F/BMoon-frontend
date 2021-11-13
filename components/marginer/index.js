import styles from './index.module.css';

const HorizontalMargin = (margin) => {
    return (
        <span 
            style={{ width: typeof margin === "string" ? margin : `${margin}px`}}
            className={styles.marginer}
        >
        </span>
    );
}

const VerticalMargin = (margin) => {
    return (
        <span 
            style={{ height: typeof margin === "string" ? margin : `${margin}px`}}
            className={styles.marginer}
        >
        </span>
    );
}

export function Marginer(props) {
    const { direction } = props.direction;
    return direction === "horizontal" ? HorizontalMargin(props.margin) : VerticalMargin(props.margin);
    
}

// setting default value to direction prop
Marginer.defaultProps = {
    direction: "horizontal",
};