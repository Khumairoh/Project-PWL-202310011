import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../Modules/Component/About/About";
import Favorit from "../Modules/Component/Favorit/Favorit";
import Login from "../Modules/Component/Login/Login";
import MenuResep from "../Modules/Component/MenuResep/MenuResep";
import Home from '../Modules/Component/Home/Home'

export default function BasePages() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="home" element={<Home/>}/>
      <Route path= 'about' element={<About />} />
      <Route path="favorit" element={<Favorit />}/>
      <Route path="login" element={<Login/>} />
      <Route path="menuresep" element={<MenuResep/>}/>
    </Routes>
  );
}
