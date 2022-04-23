import { React, useState, useEffect, useContext } from "react";
import axios from "axios";
import { titleContext } from "../Context/TitleContextprovider";

const higherOrederID = (Component, URLAddress) => {
  return function WithID({ ...props }) {
    const { text } = useContext(titleContext);
    const [ID, setID] = useState();
    useEffect(() => {
      switch (text) {
        case "HTML":
          setID(1);
          break;
        case "CSS":
          setID(2);
          break;
        case "JavaScript":
          setID(3);
          break;
        case "ReactJS":
          setID(4);
          break;
        case "NodeJS":
          setID(5);
          break;
        case "MongoDB":
          setID(6);
          break;
      }
    }, [text]);
    return <Component ID={ID}  {...props} />;
  };
};
export default higherOrederID;
