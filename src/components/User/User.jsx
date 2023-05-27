import { useContext } from "react";
import { UserContext } from "@/context/userContext";

const User = ({ user }) => {
  const { idSelected, setIdSelected } = useContext(UserContext);
  const handleSelect = () => {
    idSelected.includes(user._id)
      ? setIdSelected(idSelected.filter((id) => id !== user._id))
      : setIdSelected([...idSelected, user._id]);
  };
  return (
    <tr key={user._id}>
      <th scope="row">
        <input
          className="form-check-input"
          type="checkbox"
          checked={idSelected.includes(user._id)}
          onChange={handleSelect}
        />
      </th>
      <td>{user._id}</td>
      <td>{user.user_name}</td>
      <td>{user.email}</td>
      <td>{user.date_reg}</td>
      <td>{user.date_log}</td>
      <td className="text-end">{user.status}</td>
    </tr>
  );
};

export default User;
