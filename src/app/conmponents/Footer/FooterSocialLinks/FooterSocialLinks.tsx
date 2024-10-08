import { TelegramIcon } from "@/app/conmponents/Footer/icons/TelegramIcon";
import { TikTikIcon } from "@/app/conmponents/Footer/icons/TikTikIcon";
import { VkontakteIcon } from "@/app/conmponents/Footer/icons/VkontakteIcon";
import { YoutubeIcon } from "@/app/conmponents/Footer/icons/YoutubeIcon";
import { UIButton } from "@/app/conmponents/uikit/UIButton";
import Link from "next/link";
import styles from "./footerSocialLinks.module.scss";

export const FooterSocialLinks = () => {
  return (
    <div className={styles.socialLinksWrapper}>
      <UIButton size="md" variant="default">
        Написать в поддержку
      </UIButton>
      <div className={styles.linksContainer}>
        <Link href="/" className={styles.socialLink}>
          Telegram <TelegramIcon />
        </Link>
        <Link href="/" className={styles.socialLink}>
          ВКонтакте <VkontakteIcon />
        </Link>
        <Link href="/" className={styles.socialLink}>
          Youtube <YoutubeIcon />
        </Link>
        <Link href="/" className={styles.socialLink}>
          TikTok <TikTikIcon />
        </Link>
      </div>
    </div>
  );
};
