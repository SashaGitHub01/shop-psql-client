import React from "react";
import Aside from "./Aside/Aside";
import Header from "./Header/Header";

const Layout: React.FC = ({ children }) => {
   return (
      <div className="wrapper">
         <Header />
         <div className="main_row">
            <Aside />
            <main className="main">
               {children}
            </main>
         </div>
      </div>
   )
}

export default Layout
