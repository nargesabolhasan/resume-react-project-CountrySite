import { createContext,useState} from "react";

export const IsLogin = createContext();

const IsLoginprovider = (props) => {
  const [isLogin, setIsLogin] = useState(false)
  const { children } = props;

  const value = {
    isLogin,
    userIsLogin: () => setIsLogin(true),
    userNotLogin: () => setIsLogin(false),
  };
  return (
    <IsLogin.Provider value={value}>{children}</IsLogin.Provider>
  );
};

export default IsLoginprovider;