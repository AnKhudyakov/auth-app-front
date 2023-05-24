import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="">
      <header className=" ">
        <div className="px-3 py-2 text-bg-dark">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <nav className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                <li>
                  <Link
                    to="/"
                    className={
                      location.pathname == "/"
                        ? "nav-link text-secondary"
                        : "nav-link text-white"
                    }
                  >
                    Dashboard
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="px-3 py-2 border-bottom mb-3">
          <div className="container d-flex flex-wrap justify-content-center">
            <div className="text-end d-flex gap-3">
              <button
                type="button"
                className={
                  location.pathname !== "/login"
                    ? "btn btn-primary"
                    : "btn btn-light text-dark me-2"
                }
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                type="button"
                className={
                  location.pathname !== "/register"
                    ? "btn btn-primary"
                    : "btn btn-light text-dark me-2"
                }
                onClick={() => navigate("/register")}
              >
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
