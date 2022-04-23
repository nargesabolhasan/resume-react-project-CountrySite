import React, { useContext } from "react";
import { Typography, Box } from "@mui/material";
import { titleContext } from "../Context/TitleContextprovider";
import { BASE_URL } from "../config/BaseURL";
import higherOrederComponent from "../HOC/WithAjax"


const Description = ({ url }) => {
  const { addToText, text, changeEditMoode } = useContext(titleContext);
  return (
    <>
      {text ? (
        <Box
          sx={{
            borderLeft: 1.5,
            borderColor: "grey.300",
            textAlign: "center",
            p: 5,
          }}
        >
          <Typography>{text}</Typography>
          {url.map((skills) => {
            if (text === skills.Title) {
              return (
                <Box className="Description" key={skills.id}>
                  {skills.Description}
                </Box>
              );
            }
          })}
        </Box>
      ) : (
        <Box
          sx={{
            borderLeft: 1.5,
            borderColor: "grey.300",
            textAlign: "center",
            p: 5,
          }}
        >
          <Typography variant="h4">Welcome</Typography>
          <Typography>
            Please select an exercise from the list on the left side.
          </Typography>
        </Box>
      )}
    </>
  );
};

export default higherOrederComponent(Description,BASE_URL);
