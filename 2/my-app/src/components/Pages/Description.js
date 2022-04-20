import React, { useContext } from "react";
import higherOrederComponent from "../HOC/WithAjax";
import { BASE_URL } from "../config/BaseURL";
import {Typography,Box} from "@mui/material";
import { titleContext } from "../Context/TitleContextprovider";

const Description = ({ url }) => {
  const { addToText, text, changeEditMoode } = useContext(titleContext);
  return (
    <Box sx={{borderLeft:1.5,borderColor: 'grey.300'}}>
       <Typography>{text}</Typography>
      {url.map((skills) => {
        if (text === skills.Title) {
          return <Box className="Description" key={skills.id}>{skills.Description}</Box>;
        }
      })}
    </Box>
  );
};

export default higherOrederComponent(Description, BASE_URL);
