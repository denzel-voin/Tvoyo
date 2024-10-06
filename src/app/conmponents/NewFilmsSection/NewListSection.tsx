"use client";

import { NewFilmCard } from "@/app/conmponents/NewFilmsSection/NewFilmCard/NewFilmCard";
import { newListData } from "@/app/test-data/new-list-data";
import { RightOutlined } from "@ant-design/icons";
import React from "react";
import { Carousel } from "antd";
import styles from "./newFilmSection.module.scss";

export const NewListSection = () => {
  const carouselRef = React.useRef(null);

  const next = () => {
    if (carouselRef.current) {
      // @ts-ignore
      carouselRef.current.next();
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Новинки</h2>
      <Carousel
        ref={carouselRef}
        dots={false}
        slidesToShow={6}
        slidesToScroll={6}
        responsive={[
          { breakpoint: 1200, settings: { slidesToShow: 4 } },
          { breakpoint: 768, settings: { slidesToShow: 3 } },
          { breakpoint: 576, settings: { slidesToShow: 2 } },
        ]}
      >
        {newListData.map((item) => (
          <NewFilmCard item={item} />
        ))}
      </Carousel>
      <button onClick={next} className={styles.button}>
        <RightOutlined />
      </button>
    </div>
  );
};
