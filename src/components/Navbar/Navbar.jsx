import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
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
  );
};

export default Navbar;
