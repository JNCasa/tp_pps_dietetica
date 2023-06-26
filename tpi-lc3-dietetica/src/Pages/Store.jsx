
import { useContext } from "react";
import UserContext from "../Context/UserContext";

const Store = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user === null ? (
        <h1>Tienda</h1>
      ) : (
        <h1>Bienvenido a la tienda, {user.name}</h1>
      )}
    </div>
  );
};

export default Store;
