import type { ListItem } from "@/app/test-data/top-list-data/new-list-data";
import { Card } from "antd";
import Image from "next/image";
import React from "react";
import styles from "./topListCard.module.scss";

export const TopListCard = ({ item }: { item: ListItem }) => {
  return (
    <div key={item.id}>
      <Card
        hoverable
        className={styles.button}
        cover={
          <div className={styles.wrapper}>
            <Image
              alt="poster"
              src={item.poster}
              width={300}
              height={450}
              layout="responsive"
              objectFit="cover"
              className={styles.image}
            />
            <div className={styles.number}>{item.icon}</div>
          </div>
        }
      ></Card>
    </div>
  );
};
