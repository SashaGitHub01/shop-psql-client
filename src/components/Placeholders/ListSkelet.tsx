import React from "react";
import ContentLoader from "react-content-loader";
import { v4 } from 'uuid';

const ListSkelet = () => {
   const arr: number[] = [];
   arr.length = 6;
   arr.fill(1, 0)

   return (
      <>
         {arr.map(() => (<ContentLoader
            key={v4()}
            speed={1}
            width={300}
            height={280}
            viewBox="0 0 300 280"
            backgroundColor="#ecebeb"
            foregroundColor="#dbdbdb"
         >
            <rect x="3" y="3" rx="10" ry="10" width="250" height="274" />
         </ContentLoader>
         ))}
      </>
   )
}

export default ListSkelet