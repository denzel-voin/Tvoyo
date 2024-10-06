import styles from "@/app/conmponents/TrailerSection/trailerSection.module.scss";
import type { ITrailerData } from "@/app/types";
import Image from "next/image";

export const TrailerPreview = ({ selected }: { selected: ITrailerData }) => {
  return (
    <div className={styles.overlayText}>
      <Image
        src={selected.title}
        height={101}
        width={338}
        alt="Заголовок трейлера"
      />
      <div className={styles.trailerDetails}>
        <p className={styles.rating}>{selected.rating}</p>
        <p className={styles.dot}>·</p>
        <p>{selected.year}</p>
        <p className={styles.dot}>·</p>
        <p>{selected.genre}</p>
        <p className={styles.dot}>·</p>
        <p>{selected.country}</p>
        <p className={styles.dot}>·</p>
        <p>{selected.ageRating}+</p>
      </div>
    </div>
  );
};
