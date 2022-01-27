
import { TopSection } from './topSection';
import { KeypointSection } from './keypointSection';
import styles from './index.module.css';
import { HowItWorkSection } from './howItWorks/howItWork';
import { Footer } from '../../components/footer/footer';
import { Games } from '../../components/games/games';
import { DaoQuote } from '../../components/last-section/daoQuote';

export function HomePage(props) {
  return (
    <section className={styles.container}>
      <TopSection />
      <KeypointSection />
      <HowItWorkSection />
      <Games />
      <DaoQuote />
      <Footer />
    </section>
  );
}
