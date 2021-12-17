import styles from './index.module.css';
import Image from 'next/image'

export function MarbaleBall(props) {
    const { color, icon, iconSize=70, hasShade=false, customStyles} = props;
    return (
        <div 
            className={`${styles.marble} container`}
            style={customStyles.out}
        >
            <div className={styles.inner}
            style={customStyles?.inner} />

            <div className={styles.logoImage}>
                <Image
                    src={icon}
                    height={iconSize}
                    width={iconSize}
                    alt="Benevolent Moon logo"
                />
            </div>
            { hasShade && <div className={styles.shadow} /> }
        </div>
    );
}