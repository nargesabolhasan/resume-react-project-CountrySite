import { React, useEffect, useState,useContext } from "react";
import { userContext } from "../Context/UserContext";

const ISAuth = () => {
  const { userInfo } = useContext(userContext);
  const [users, setUsers] = useState([]);
  const f = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUsers(json.data);
  };
  useEffect(() => {
    f();
  }, []);
  return (
    <div>
      {userInfo.length &&
        userInfo.map((user) => {
          return (
            <div key={user.id}>
              <p>
                <strong>{user.first_name}</strong>
              </p>
              <p>{user.email}</p>
              <img key={user.avatar} src={user.avatar} />
            </div>
          );
        })}
    </div>
  );
};

export default ISAuth;
