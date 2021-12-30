export const getPagesArray = (pages: number, current: number) => {
   let row = 6;

   let arr: number[] = [];
   let max = current;

   if (pages <= row) {
      for (let i = 0; i < pages; ++i) {
         arr.push(i + 1);
      }

      return arr;
   }

   if (current == 1 || current <= 4) {
      for (let i = 0; i < row; ++i) {
         arr.push(i + 1);
      }

      return arr;
   }

   if (current > 4 && current < pages - 4) {
      for (let i = current - 1; i < (Number(row) + Number(current) - 1); i++) {
         arr.push(i);
      }
   }

   if (current > pages - 5) {
      for (let i = pages - 6; i < Number(pages); i++) {
         arr.push(i + 1);
      }
   }


   return arr;
}