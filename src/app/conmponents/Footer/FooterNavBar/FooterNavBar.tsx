import Link from "next/link";
import styles from "./footerNavBar.module.scss";

export const FooterNavBar = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.navLinks}>
        <Link href="/">Главная</Link>
        <Link href="/">Фильмы</Link>
        <Link href="/">Сериалы</Link>
        <Link href="/">ТВ</Link>
        <Link href="/">Контакты</Link>
      </div>
      <div className={styles.navLinks}>
        <Link href="/">Реферальная программа</Link>
        <Link href="/">Скачать приложение</Link>
        <Link href="/">Вопросы и ответы</Link>
        <Link href="/">Условия использования</Link>
      </div>
    </div>
  );
};
