import styles from "@/app/conmponents/TrailerSection/trailerSection.module.scss";
import { trailerData } from "@/app/test-data/carousel-data";
import clsx from "clsx";
import Image from "next/image";

interface ITrailerTabs {
  selectedTrailer: number;
  handleTabClick: (index: number) => void;
  progress: number;
}

export const TrailerTabs = ({
  selectedTrailer,
  handleTabClick,
  progress,
}: ITrailerTabs) => {
  return (
    <div className={styles.trailerTabs}>
      {trailerData.map((trailer, index) => (
        <div
          key={trailer.id}
          className={clsx("trailer-tab", selectedTrailer === index && "active")}
          onClick={() => handleTabClick(index)}
          style={{ position: "relative", cursor: "pointer" }}
        >
          <Image
            src={trailer.poster}
            alt={`Трейлер ${index + 1}`}
            width={256}
            height={152}
            className={styles.thumbnail}
          />
          {selectedTrailer === index && (
            <div
              className={styles.progressBar}
              style={{
                width: `${progress}%`,
                transition: "width 0.1s linear",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};
