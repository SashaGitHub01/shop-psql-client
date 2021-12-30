import React from "react"
import ContentLoader from "react-content-loader"
import { v4 } from 'uuid';

const HistoryItems = () => {
   const arr: any[] = [];
   arr.length = 9;
   arr.fill(v4(), 0)

   return (
      <>
         {arr.map((key, i) => <ContentLoader
            key={key + i}
            speed={1.1}
            width={125}
            height={140}
            viewBox="0 0 125 140"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebee"
         >
            <rect x="1" y="8" rx="3" ry="3" width="120" height="125" />
         </ContentLoader>
         )}
      </>
   )
}


export default HistoryItems