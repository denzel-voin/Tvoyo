import { LikeIcon } from "@/app/conmponents/PromoSection/icons/LikeIcon";
import { MobileIcon } from "@/app/conmponents/PromoSection/icons/MobileIcon";
import { NewFilmIcon } from "@/app/conmponents/PromoSection/icons/NewFilmIcon";
import { StarIcon } from "@/app/conmponents/PromoSection/icons/StarIcon";
import { UIButton } from "@/app/conmponents/uikit/UIButton";
import Image from "next/image";
import styles from "./promoSection.module.scss";
import doc from "./images/doc.png";
import elit from "./images/elit.png";
import emily from "./images/emily.png";
import home from "./images/home.png";

export const PromoSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.catalogContent}>
        <h2 className={styles.title}>Смотри мировые премьеры</h2>
        <div className={styles.gridWrapper}>
          <div className={styles.descriptionBlock}>
            <NewFilmIcon />
            <p className={styles.description}>Новинки каждую неделю</p>
          </div>
          <div className={styles.descriptionBlock}>
            <StarIcon />
            <p className={styles.description}>Без рекламы и доплат</p>
          </div>
          <div className={styles.descriptionBlock}>
            <MobileIcon />
            <p className={styles.description}>На любом устройстве</p>
          </div>
          <div className={styles.descriptionBlock}>
            <LikeIcon />
            <p className={styles.description}>Эксклюзивная озвучка</p>
          </div>
        </div>
        <div className={styles.subscribeWrapper}>
          <UIButton size="lg" variant="primary">
            Попробовать бесплатно
          </UIButton>
          <span className={styles.subscribeDescription}>
            далее от 166 ₽/мес
          </span>
        </div>
      </div>

      <div className={styles.imagesContent}>
        <div className={styles.row1}>
          <Image src={elit} alt="poster" className={styles.poster} />
          <Image src={emily} alt="poster" className={styles.poster} />
          <Image src={home} alt="poster" className={styles.poster} />
        </div>
        <div className={styles.row2}>
          <Image src={home} alt="poster" className={styles.poster} />
          <Image src={doc} alt="poster" className={styles.poster} />
          <Image src={elit} alt="poster" className={styles.poster} />
        </div>
        <div className={styles.row3}>
          <Image src={doc} alt="poster" className={styles.poster} />
          <Image src={emily} alt="poster" className={styles.poster} />
          <Image src={home} alt="poster" className={styles.poster} />
          <Image src={emily} alt="poster" className={styles.poster} />
        </div>
      </div>
    </div>
  );
};
