import { useContext } from "react";
import { UsersContext } from "../../contexts/UserContext";

export const Users = () => {
  const { users } = useContext(UsersContext);

  const html = users.map((user) => (
    <div className="drinks">
      <div key={user.phone}>
        <p>Firstname: {user.firstname}</p>
        <p>Lastname: {user.lastname}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      </div>
    </div>
  ));

  return <div>{html}</div>;
};
