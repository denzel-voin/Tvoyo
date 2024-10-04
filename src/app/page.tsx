import { Header } from "@/app/conmponents/Header/Header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header>
        <Header />
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
}
