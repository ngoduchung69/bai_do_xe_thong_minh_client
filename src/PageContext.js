import { useState, createContext, Children } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext();

function UserProvider(props) {
  const [userType, setUserType] = useState();
  const [chosenStore, setChosenStore] = useState({})

  return (
    <UserContext.Provider value={{ userType, setUserType, setChosenStore, chosenStore }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
