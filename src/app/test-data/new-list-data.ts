import type { INewListData } from "@/app/types";
import img1 from "./new-list-images/new-img1.png";
import img2 from "./new-list-images/new-img2.png";
import img3 from "./new-list-images/new-img3.png";
import img4 from "./new-list-images/new-img4.png";
import img5 from "./new-list-images/new-img5.png";
import img6 from "./new-list-images/new-img6.png";
import img7 from "./new-list-images/new-img7.png";

export const newListData: INewListData[] = [
  {
    id: 1,
    rating: "9,9",
    poster: img1,
    title: "Муфаса: Король Лев",
    year: 2024,
    newSeason: false,
    duration: "2 ч 32 мин",
  },
  {
    id: 2,
    rating: "9,9",
    poster: img2,
    title: "Амфибия",
    year: 2024,
    newSeason: false,
    duration: "2 ч 32 мин",
  },
  {
    id: 3,
    rating: "9,9",
    poster: img3,
    title: "Слишком стар, чтобы умереть молодым",
    year: 2024,
    newSeason: true,
    duration: "2 сезона",
  },
  {
    id: 4,
    rating: "9,9",
    poster: img4,
    title: "Джокер: Безумие на двоих",
    year: 2024,
    newSeason: false,
    duration: "1 ч 56 мин",
  },
  {
    id: 5,
    rating: "5,4",
    poster: img5,
    title: "Хороших девочек не убивают",
    year: 2024,
    newSeason: true,
    duration: "5 сезонов",
  },
  {
    id: 6,
    rating: "9,9",
    poster: img6,
    title: "Лощина",
    year: 2024,
    newSeason: false,
    duration: "2 ч 42 мин",
  },
  {
    id: 7,
    rating: "9,9",
    poster: img7,
    title: "Гадкий я 4",
    year: 2024,
    newSeason: false,
    duration: "1 ч 48 мин",
  },
];
