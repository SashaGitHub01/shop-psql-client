import { IconType } from "react-icons";
import { StarFillIcon, StarHalfIcon, StarIcon } from "../assets/icons";

export const getRating = (val: number): IconType[] => {
   let arr: number[] = [];

   const trunc = Math.trunc(val);
   const rest = val - trunc;

   arr.length = trunc;

   arr.fill(1, 0, trunc);

   if (rest >= 0.5) arr.push(0.5);

   arr.length = 5;

   arr.fill(0, trunc);

   const icons = arr.map((num) => {
      if (!num) return StarIcon;

      if (num === 1) return StarFillIcon;

      return StarHalfIcon;
   })

   return icons;
}