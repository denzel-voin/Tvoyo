import { Header } from "@/app/conmponents/Header/Header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header>
        <Header />
      </header>
      <main className={styles.main}></main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
