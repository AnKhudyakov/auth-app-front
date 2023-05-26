import { useContext } from "react";
import Table from "../ui-kit/table/Table";
import { UserContext } from "@/context/userContext";
import { API } from "@/api/api";

const Dashboard = ({ users }) => {
  const { idSelected, setIdSelected, update, setUpdate } = useContext(UserContext);
  const handleBlock = () => {
    idSelected.forEach((id) => {
      if (users.find((user) => user._id === id).status === "active") {
        API.blockUser(id)
          .then((data) => {
            setUpdate(id);
            //toast.success(data.message);
          })
          .catch((err) => {
            console.log(err);
            //  toast.error(err.response.data.message);
          });
      }
    });
    setUpdate(!update);
  };
  const handleUnblock = () => {
    idSelected.forEach((id) => {
      if (users.find((user) => user._id === id).status === "blocked") {
        API.unblockUser(id)
          .then((data) => {
            console.log(data.message);
            setUpdate(id+"1");
            //toast.success(data.message);
          })
          .catch((err) => {
            console.log(err);
            //toast.error(err.response.data.message);
          });
      }
    });
  };
  const handleDelete = () => {
    idSelected.forEach((id) => {
      API.removeUser(id)
        .then((data) => {
          setIdSelected([])
          setUpdate(id+"2");
          console.log(data.message);
          //toast.success(data.message);
        })
        .catch((err) => {
          console.log(err);
          //  toast.error(err.response.data.message);
        });
    });
  };

  return (
    <div className="container mt-2 px-2">
      <div className="mb-2 d-flex justify-content-end gap-2 align-items-center bg-light">
        <button
          type="button"
          className={
            // location.pathname !== "/login"
            //    ?
            "btn btn-primary"
            //    : "btn btn-light text-dark me-2"
          }
          onClick={handleBlock}
        >
          Block User
        </button>
        <button
          type="button"
          className={
            // location.pathname !== "/login"
            //    ?
            "btn btn-primary"
            //    : "btn btn-light text-dark me-2"
          }
          onClick={handleUnblock}
        >
          Unblock User
        </button>
        <button
          type="button"
          className={
            // location.pathname !== "/login"
            //    ?
            "btn btn-primary"
            //    : "btn btn-light text-dark me-2"
          }
          onClick={handleDelete}
        >
          Delete User
        </button>
      </div>
      <Table users={users} />
    </div>
  );
};

export default Dashboard;
