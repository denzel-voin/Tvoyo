import { IconEight } from "@/app/conmponents/TopListSection/numbersIcons/IconEight";
import { IconFive } from "@/app/conmponents/TopListSection/numbersIcons/IconFive";
import { IconFour } from "@/app/conmponents/TopListSection/numbersIcons/IconFour";
import { IconNine } from "@/app/conmponents/TopListSection/numbersIcons/IconNine";
import IconOne from "@/app/conmponents/TopListSection/numbersIcons/IconOne";
import { IconSeven } from "@/app/conmponents/TopListSection/numbersIcons/IconSeven";
import { IconSix } from "@/app/conmponents/TopListSection/numbersIcons/IconSix";
import { IconTen } from "@/app/conmponents/TopListSection/numbersIcons/IconTen";
import { IconThree } from "@/app/conmponents/TopListSection/numbersIcons/IconThree";
import { IconTwo } from "@/app/conmponents/TopListSection/numbersIcons/IconTwo";
import type { StaticImageData } from "next/image";
import first from "./images/first.png";
import second from "./images/second.png";
import third from "./images/third.png";
import fourth from "./images/fourth.png";
import fives from "./images/fives.png";
import six from "./images/six.png";
import seven from "./images/seven.png";
import eight from "./images/eight.png";
import nine from "./images/nine.png";
import ten from "./images/ten.png";

export interface ListItem {
  id: number;
  icon: JSX.Element;
  poster: StaticImageData;
}

export const topListData: ListItem[] = [
  {
    id: 1,
    icon: <IconOne />,
    poster: first,
  },
  {
    id: 2,
    icon: <IconTwo />,
    poster: second,
  },
  {
    id: 3,
    icon: <IconThree />,
    poster: third,
  },
  {
    id: 4,
    icon: <IconFour />,
    poster: fourth,
  },
  {
    id: 5,
    icon: <IconFive />,
    poster: fives,
  },
  {
    id: 6,
    icon: <IconSix />,
    poster: six,
  },
  {
    id: 7,
    icon: <IconSeven />,
    poster: seven,
  },
  {
    id: 8,
    icon: <IconEight />,
    poster: eight,
  },
  {
    id: 9,
    icon: <IconNine />,
    poster: nine,
  },
  {
    id: 10,
    icon: <IconTen />,
    poster: ten,
  },
];
