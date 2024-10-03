import { LogoIcon } from "@/app/conmponents/Header/icons/Logo";
import Link from "next/link";

export const Header = () => {
  return (
    <div>
      <div>
        <LogoIcon />
        <Link href="/">Главная</Link>
        <Link href="/">Фильмы</Link>
        <Link href="/">Сериалы</Link>
        <Link href="/">ТВ</Link>
      </div>
    </div>
  );
};
