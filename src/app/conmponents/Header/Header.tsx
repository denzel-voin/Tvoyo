import { DownloadIcon } from "@/app/conmponents/Header/icons/DownloadIcon";
import { LogoIcon } from "@/app/conmponents/Header/icons/LogoIcon";
import { PromoIcon } from "@/app/conmponents/Header/icons/PromoIcon";
import { SearchIcon } from "@/app/conmponents/Header/icons/SearchIcon";
import { UIButton } from "@/app/conmponents/uikit/UIButton";
import clsx from "clsx";
import styles from "./header.module.scss";
import Link from "next/link";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.navbar}>
        <Link href="/">
          <LogoIcon />
        </Link>
        <div className={styles.navbar__links}>
          <Link
            href="/"
            className={clsx(styles.navbar__links_link, styles.action_link)}
          >
            Главная
          </Link>
          <Link href="/" className={styles.navbar__links_link}>
            Фильмы
          </Link>
          <Link href="/" className={styles.navbar__links_link}>
            Сериалы
          </Link>
          <Link href="/" className={styles.navbar__links_link}>
            ТВ
          </Link>
        </div>
      </div>
      <div className={styles.action_buttons}>
        <UIButton size="md" variant="default">
          <DownloadIcon />
          Установить
        </UIButton>
        <UIButton size="md" variant="primary">
          7 дней за 0 ₽
        </UIButton>
        <UIButton size="md" variant="default">
          <PromoIcon />
          Промокод
        </UIButton>
        <button className="action-btn">
          <SearchIcon />
        </button>
        <button className="action-btn">Войти</button>
      </div>
    </div>
  );
};
