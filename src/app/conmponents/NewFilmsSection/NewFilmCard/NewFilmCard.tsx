import type { INewListData } from "@/app/types";
import { Card, Tag } from "antd";
import Image from "next/image";
import React from "react";
import styles from "./newFilmCard.module.scss";

export const NewFilmCard = ({ item }: { item: INewListData }) => {
  return (
    <div key={item.id}>
      <Card
        hoverable
        className={styles.button}
        cover={
          <div className={styles.wrapper}>
            <Image
              alt={item.title}
              src={item.poster}
              width={240}
              height={360}
              layout="responsive"
              objectFit="cover"
              className={styles.image}
            />
            <span className={styles.rating}>{item.rating}</span>
            {item.newSeason && (
              <Tag color="default" className={styles.tag}>
                Новый сезон
              </Tag>
            )}
          </div>
        }
      >
        <div className={styles.title}>{item.title}</div>
        <div className={styles.description}>
          {item.year}, {item.duration}
        </div>
      </Card>
    </div>
  );
};
