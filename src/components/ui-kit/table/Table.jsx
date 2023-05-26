import { useState, useContext, useEffect } from "react";
import { UserContext } from "@/context/userContext";

import User from "../../User/User";

const Table = ({ users }) => {
  const { idSelected, setIdSelected } = useContext(UserContext);
  const handleSelect = () => {
    idSelected.length === users.length
      ? setIdSelected([])
      : setIdSelected(users.map((user) => user._id));
  };
  return (
    <div className="table-responsive bg-light">
      <table className="table table-responsive table-borderless">
        <thead className="table-dark">
          <tr className="bg-light">
            <th scope="col" width="5%">
              <input
                className="form-check-input"
                type="checkbox"
                checked={idSelected.length === users.length}
                onChange={handleSelect}
              />
            </th>
            <th scope="col" width="20%">
              id
            </th>
            <th scope="col" width="15%">
              Name
            </th>
            <th scope="col" width="10%">
              Email
            </th>
            <th scope="col" width="20%">
              Reg. Date
            </th>
            <th scope="col" width="25%">
              Login Date
            </th>
            <th scope="col" width="5%">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <User user={user} key={user._id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
