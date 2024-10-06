import type { StaticImageData } from "next/image";
import titleImg from "./carousel-images/title-img.png";
import img1 from "./carousel-images/carousel-img1.png";
import img2 from "./carousel-images/carousel-img2.png";
import img3 from "./carousel-images/carousel-img3.png";
import img4 from "./carousel-images/carousel-img4.png";
import img5 from "./carousel-images/carousel-img5.png";
import img6 from "./carousel-images/carousel-img6.png";
import img7 from "./carousel-images/carousel-img7.png";
import img8 from "./carousel-images/carousel-img8.png";

export interface ITrailerData {
  id: number;
  title: StaticImageData;
  rating: string;
  year: number;
  genre: string;
  country: string;
  ageRating: number;
  poster: StaticImageData;
}

export const trailerData: ITrailerData[] = [
  {
    id: 1,
    ageRating: 16,
    country: "США",
    genre: "Фэнтези",
    rating: "7.9",
    poster: img1,
    title: titleImg,
    year: 2024,
  },
  {
    id: 2,
    ageRating: 16,
    country: "США",
    genre: "Фэнтези",
    rating: "7.9",
    poster: img2,
    title: titleImg,
    year: 2024,
  },
  {
    id: 3,
    ageRating: 16,
    country: "США",
    genre: "Фэнтези",
    rating: "7.9",
    poster: img3,
    title: titleImg,
    year: 2024,
  },
  {
    id: 4,
    ageRating: 16,
    country: "США",
    genre: "Фэнтези",
    rating: "7.9",
    poster: img4,
    title: titleImg,
    year: 2024,
  },
  {
    id: 5,
    ageRating: 16,
    country: "США",
    genre: "Фэнтези",
    rating: "7.9",
    poster: img5,
    title: titleImg,
    year: 2024,
  },
  {
    id: 6,
    ageRating: 16,
    country: "США",
    genre: "Фэнтези",
    rating: "7.9",
    poster: img6,
    title: titleImg,
    year: 2024,
  },
  {
    id: 7,
    ageRating: 16,
    country: "США",
    genre: "Фэнтези",
    rating: "7.9",
    poster: img7,
    title: titleImg,
    year: 2024,
  },
  {
    id: 8,
    ageRating: 16,
    country: "США",
    genre: "Фэнтези",
    rating: "7.9",
    poster: img8,
    title: titleImg,
    year: 2024,
  },
];
