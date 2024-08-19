import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";

import { Button } from "@mui/material";
const Header = () => {
  return (
    <>
      <nav className="navbar p-2 navbar-expand-lg text-white sticky bg-body-tertiary navabar_css">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            ChatGPT
          </NavLink>

          <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
            <ul className="navbar-nav ms-auto   mb-2 mb-lg-0">
              {true ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link  ">
                      <Button variant="outlined">Login</Button>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link  ">
                      <Button variant="contained">Sign Up</Button>
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown mt-1 text-capitalize ">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{ border: "none" }}
                    >
                      Aniruth
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink to="/login" className="dropdown-item">
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
