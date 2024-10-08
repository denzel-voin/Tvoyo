import { LogoIcon } from "@/app/conmponents/Footer/icons/LogoIcon";
import styles from "./footerInfoContent.module.scss";

export const FooterInfoContent = () => {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.description}>
        <p className={styles.adult}>18+</p>
        <div>
          <p className={styles.text}>2024, ООО «ТВОЁ ЛАЙВ»</p>
          <p className={styles.text}>Все права защищены.</p>
        </div>
      </div>
      <LogoIcon />
      <p className={styles.text}>ИНН 7720904034</p>
    </div>
  );
};
