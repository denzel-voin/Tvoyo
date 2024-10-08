import { Footer } from "@/app/conmponents/Footer/Footer";
import { Header } from "@/app/conmponents/Header/Header";
import { NewListSection } from "@/app/conmponents/NewFilmsSection/NewListSection";
import { PromoSection } from "@/app/conmponents/PromoSection/PromoSection";
import { TopListSection } from "@/app/conmponents/TopListSection/TopListSection";
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
        <PromoSection />
        <TopListSection />
        <Footer />
      </main>
      <footer></footer>
    </>
  );
}
