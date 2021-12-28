import React from "react"
import ContentLoader from "react-content-loader"

const ProdWindow = () => (
   <ContentLoader
      speed={1}
      width={300}
      height={220}
      viewBox="0 0 300 220"
      backgroundColor="#f3f3f3"
      foregroundColor="rgb(199, 199, 199)"
   >
      <rect x="2" y="13" rx="10" ry="10" width="291" height="201" />
   </ContentLoader>
)

export default ProdWindow