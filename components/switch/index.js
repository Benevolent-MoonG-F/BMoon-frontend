import styles from './index.module.css';
export const SwitchButton = ({ isBMS, setIsBMS }) => {
  return (
    <div className={styles.switchcontainer}>
      <div className={styles.buttoncontainer}>
        <button
          onClick={() => {
            if (isBMS) {
              setIsBMS(false);
            }
          }}
        
          className={styles.dailyrocketbutton}
          style={{ backgroundColor: isBMS ? '#142237' : '#374254' }}
        >
          
           <p style={{ fontSize: '17px', fontWeight: 'bold' }}>Daily Rocket</p>
        

         
        </button>
        <button
          onClick={() => {
            if (!isBMS) {
              setIsBMS(true);
            }
          }}
        
          className={styles.bmsbutton}
          style={{ backgroundColor: isBMS ? '#374254' : '#142237' }}
        >
          <p style={{ fontSize: '17px', fontWeight: 'bold' }}>BMS</p>
        </button>
        
      </div>
    </div>
  );
};
