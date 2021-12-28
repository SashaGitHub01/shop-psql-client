import React from "react"
import ContentLoader from "react-content-loader"

const BigImg = () => (
   <ContentLoader
      speed={1}
      width={250}
      height={250}
      viewBox="0 0 250 250"
      backgroundColor="#f3f3f3"
      foregroundColor="rgb(199, 199, 199)"
   >
      <rect x="6" y="4" rx="10" ry="10" width="227" height="245" />
   </ContentLoader>
)

export default BigImg