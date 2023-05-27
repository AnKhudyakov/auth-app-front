import React, { useState } from "react";
import { UserContext } from "@/context/userContext";
import AuthBar from "../Authbar/Authbar";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [idSelected, setIdSelected] = useState([]);
  const [update, setUpdate] = useState(false);
  return (
    <UserContext.Provider
      value={{
        isAuth,
        setIsAuth,
        idSelected,
        setIdSelected,
        update,
        setUpdate,
      }}
    >
      <div className="">
        <header className=" ">
          <Navbar/>
          <AuthBar />
        </header>
        <main>{children}</main>
      </div>
    </UserContext.Provider>
  );
};

export default Layout;
