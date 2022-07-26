import { useState, createContext, Children } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext();

function UserProvider(props) {
  const [userType, setUserType] = useState();

  return (
    <UserContext.Provider value={{ userType, setUserType }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
