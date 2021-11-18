
import { MultiStepForm } from '../../components/multiStepForm';
import { Navbar } from '../../components/navbar';
import styles from './index.module.css';

export function OrderPage(props) {

    return (
        <div>
            <Navbar/>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <MultiStepForm />
                </div>
            </div>
        </div>
    );
}