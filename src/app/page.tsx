import { Header } from "@/app/conmponents/Header/Header";
import { NewListSection } from "@/app/conmponents/NewFilmsSection/NewListSection";
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
        <NewListSection />
      </main>
      <footer></footer>
    </>
  );
}
