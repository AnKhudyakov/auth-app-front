import { useEffect, useState, useContext } from "react";
import { API } from "@/api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "../Dashboard/Dashboard";
import { UserContext } from "@/context/userContext";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const { isAuth, setIsAuth, update } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    API.getUsers()
      .then((data) => {
        setUsers(data);
        setIsAuth(true);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        setIsAuth(false);
        localStorage.setItem("access_token", "null");
        setTimeout(()=>{navigate("/login");}, 2000)
      });
  }, [update]);
  return (
    <section>
      {!isAuth ? (
        <div className="container py-4 px-3 mx-auto">
          <h1>Hello, please login or register to view users!</h1>
        </div>
      ) : (
        <Dashboard users={users} />
      )}
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
};

export default HomePage;
