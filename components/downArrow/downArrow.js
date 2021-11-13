import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './downArrow.module.css'

export function DownArrow() {
    return (
      <div className={styles.container}>
          <FontAwesomeIcon icon={faAngleDoubleDown} />
      </div>
    );
  }