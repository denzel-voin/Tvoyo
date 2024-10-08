import { FooterInfoContent } from "@/app/conmponents/Footer/FooterInfoContent/FooterInfoContent";
import { FooterNavBar } from "@/app/conmponents/Footer/FooterNavBar/FooterNavBar";
import { FooterSocialLinks } from "@/app/conmponents/Footer/FooterSocialLinks/FooterSocialLinks";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <FooterSocialLinks />
      <FooterNavBar />
      <FooterInfoContent />
    </div>
  );
};
