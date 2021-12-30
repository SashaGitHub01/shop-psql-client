export const getPagesCount = (limit: number, count: number) => {
   return Math.ceil(count / limit);
}