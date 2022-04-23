import React, { useContext, useState, useRef } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { titleContext } from "../Context/TitleContextprovider";
import Button from "@mui/material/Button";

const FormText = () => {
  const descriptionInput = useRef(null);
  const [inputText, setInputText] = useState();
  const { addToText, text, changeEditMoode } = useContext(titleContext);

  const sbmitEdit = () => {
    changeEditMoode(false);
    let input=descriptionInput.current
    console.log(input.value)
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
      <TextField
        ref={descriptionInput}
        sx={{ width: "300px", textAlign: "center" }}
        id="standard-helperText"
        label="Description"
        placeholder="add skills here..."
        variant="standard"
        onChange={(e) => setInputText(e.target.value)}
      />
      <Button variant="text" onClick={sbmitEdit} sx={{ mx: "auto" }}>
        EDIT
      </Button>
    </Box>
  );
};

export default FormText;
