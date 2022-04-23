import React, { useContext, useState, useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { titleContext } from "../Context/TitleContextprovider";
import Button from "@mui/material/Button";
import higherOrederID from "../HOC/WithID";
import higherOrederComponent from "../HOC/WithAjax";
import axios from "axios";
import { BASE_URL } from "../config/BaseURL";

const FormText = ({ ID, url }) => {
  const [inputText, setInputText] = useState();
  const [defaultVal, setDefaultValue] = useState("");
  const { text, changeEditMoode } = useContext(titleContext);

  const sbmitEdit = () => {
    changeEditMoode(false);
    axios.patch(`${BASE_URL}/${ID}`, { Description: inputText });
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        p: 1,
        m: 2,
        bgcolor: "background.paper",
        borderRadius: 1,
        mx: "auto",
      }}
    >
      <TextField
        sx={{ margin: "10px 0", width: "300px", textAlign: "center" }}
        id="standard-read-only-input"
        label="Title"
        defaultValue={text}
        InputProps={{
          readOnly: true,
        }}
        variant="standard"
      />
      <Box sx={{ width: "300px", textAlign: "center" }}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Skills
          </InputLabel>
          <NativeSelect
            defaultValue={30}
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
          >
            <option value="Web Design">Web Design</option>
            <option value="Front-End">Front-End</option>
            <option value="Back-End">Back-End</option>
          </NativeSelect>
        </FormControl>
      </Box>
      <Typography  sx={{ color: "rgb(128, 128, 128)" }}>Description</Typography>
      <TextField
        id="standard-multiline-static"
        multiline
        sx={{ width: "300px", textAlign: "center" }}
        defaultValue={url.map((skills) => {
          if (text === skills.Title) {
            return skills.Description;
          }
        })}
        variant="standard"
        onChange={(e) =>setInputText(e.target.value)}
      />
      <Button variant="text" onClick={sbmitEdit} sx={{ mx: "auto" }}>
        EDIT
      </Button>
    </Box>
  );
};

export default higherOrederComponent(higherOrederID(FormText), BASE_URL);
