import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "@/context/userContext";

const Authbar = () => {
  const { isAuth, setIsAuth } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogout = () => {
    localStorage.setItem("access_token", "null");
    setIsAuth(false);
  };

  return (
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
          <button
            type="button"
            className={
              isAuth ? "btn btn-primary" : "btn btn-light text-dark me-2"
            }
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Authbar;
