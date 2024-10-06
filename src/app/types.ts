import type { StaticImageData } from "next/image";

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

export interface INewListData {
  id: number;
  title: string;
  newSeason: boolean;
  poster: StaticImageData;
  year: number;
  duration: string;
  rating: string;
}
