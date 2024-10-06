import { Header } from "@/app/conmponents/Header/Header";
import { TrailerCarousel } from "@/app/conmponents/TrailerSection/TrailerSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className={styles.container}>
        <Header />
      </header>
      <main>
        <TrailerCarousel />
      </main>
      <footer></footer>
    </>
  );
}
