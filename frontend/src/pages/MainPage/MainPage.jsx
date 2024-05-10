
import styles from './MainPage.module.scss';
import logo from '../../assets/eventpro-logo.png'; // Importuojame paveikslėlio failą

const Main = () => {
  return (
    <div className={styles.mainContainer}>
      <img src={logo} alt="EventPro logo" className={styles.logo} /> {/* Pridedame paveikslėlį su pritaikytais stiliais */}
      <h1 className={styles.title}>Sveiki atvykę į EventPro - klientų registravimo ir renginių platformą!</h1>
      <p className={styles.paragraph}>Čia galite lengvai tvarkyti klientų registracijas į renginius</p>
    </div>
  );
};

export default Main;
