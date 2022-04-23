import { createContext,useState} from "react";

export const userContext = createContext();

const UserContextprovider = (props) => {
  const [userInfo, setUserInfo] = useState([])
  const { children } = props;

  const value = {
    userInfo,
    addUser: (input) => setUserInfo([input]),
  };
  return (
    <userContext.Provider value={value}>{children}</userContext.Provider>
  );
};

export default UserContextprovider;