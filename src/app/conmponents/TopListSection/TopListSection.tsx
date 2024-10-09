"use client";

import styles from "./topListSection.module.scss";
import { TopListCard } from "@/app/conmponents/TopListSection/TopListCard/TopListCard";
import { topListData } from "@/app/test-data/top-list-data/new-list-data";
import { RightOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import React from "react";

export const TopListSection = () => {
  const carouselRef = React.useRef(null);

  const next = () => {
    if (carouselRef.current) {
      // @ts-ignore
      carouselRef.current.next();
    }
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>ТОП-10 НЕДЕЛИ</h3>
      <Carousel
        ref={carouselRef}
        dots={false}
        slidesToShow={4.5}
        slidesToScroll={1}
        touchMove={true}
        responsive={[
          { breakpoint: 1200, settings: { slidesToShow: 4 } },
          { breakpoint: 768, settings: { slidesToShow: 3 } },
          { breakpoint: 576, settings: { slidesToShow: 2 } },
        ]}
      >
        {topListData.map((item) => (
          <TopListCard item={item} />
        ))}
      </Carousel>
      <button onClick={next} className={styles.button}>
        <RightOutlined />
      </button>
    </div>
  );
};
