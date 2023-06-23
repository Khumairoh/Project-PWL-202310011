import React from "react";
import {NavLink} from 'react-router-dom';
import cuki from '../../../Asset/cuki.png'
import '../../../Layout/Component/headers/Header.css'

export default function Headers() {
  const menuList = [
    { id: 1, name: "Home", path: "/home"},
    { id: 2, name: "Menu & Resep", path: "/menuresep" },
    { id: 3, name: "Favorit Resep", path: "/favoriresept" },
    { id: 4, name: "About", path: "/about"},
    { id: 5, name: "Login", path: "/login"},
  ];

  return (
    <header class="header">
    <nav className="navbar navbar-expand-md fixed-top  nav pnav">
        <div className="container" >
            <a className="collapse navbar-collapse logoall" class="cuki">
                <img src={cuki} alt="cuki" 
                style={{ height: "40px" }}  />
              {/* <p className="Nlogo">CUKI</p> */}
            </a>
            
            <button className="navbar-toggler" type="button">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse namenav" id="navbarCollapse">
                <div className="d-flex w-100 justify-content-end">
                    <div id='main-nav' class="mainnav">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0 ">
                            {menuList.map((v, index) => (
                                <li className="nav-item me-1 " key={index}>
                                    <NavLink className="nav-link text-hover-success px-3 clrr" to={v.path}>
                                        <i className={"bi me-2 fs-5  "+v.icon}></i>
                                        {v.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</header>
  );
}
