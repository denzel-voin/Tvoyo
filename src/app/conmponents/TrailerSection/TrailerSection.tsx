"use client";

import { TrailerPreview } from "@/app/conmponents/TrailerSection/TrailerPreview/TrailerPreview";
import { TrailerTabs } from "@/app/conmponents/TrailerSection/TrailerTabs/TrailerTabs";
import { trailerData } from "@/app/test-data/carousel-data";
import { useState, useEffect, useRef } from "react";
import styles from "./trailerSection.module.scss";

export const TrailerCarousel = () => {
  const [selectedTrailer, setSelectedTrailer] = useState(0);
  const [progress, setProgress] = useState(0);
  const totalDuration = 10000;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startProgress();

    const interval = setInterval(() => {
      handleTabSwitch();
    }, totalDuration);

    return () => {
      clearInterval(interval);
      clearInterval(intervalRef.current!);
    };
  }, []);

  const handleTabSwitch = () => {
    setSelectedTrailer((prev) =>
      prev === trailerData.length - 1 ? 0 : prev + 1,
    );
    resetProgress();
  };

  const resetProgress = () => {
    clearInterval(intervalRef.current!);
    setProgress(0);
    startProgress();
  };

  const startProgress = () => {
    let currentProgress = 0;

    intervalRef.current = setInterval(() => {
      currentProgress += 1;
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(intervalRef.current!);
      }
    }, totalDuration / 100);
  };

  const handleTabClick = (index: number) => {
    if (index !== selectedTrailer) {
      setSelectedTrailer(index);
      resetProgress();
    }
  };

  const selected = trailerData[selectedTrailer];

  return (
    <div className={styles.carouselContainer}>
      <div
        className={styles.trailerMain}
        style={{
          backgroundImage: `
      linear-gradient(180deg, rgba(9, 9, 12, 0) 50%, #09090C 92.09%),
      linear-gradient(180deg, #09090C 0%, rgba(15, 15, 15, 0) 50%),
      linear-gradient(90deg, #09090C 21.09%, rgba(9, 9, 12, 0) 50%),
      url(${selected.poster.src})`,
        }}
      >
        <TrailerPreview selected={selected} />
        <TrailerTabs
          selectedTrailer={selectedTrailer}
          handleTabClick={handleTabClick}
          progress={progress}
        />
      </div>
    </div>
  );
};
