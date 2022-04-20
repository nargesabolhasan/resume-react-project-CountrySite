import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { titleContext } from "./Context/TitleContextprovider";
import Button from '@mui/material/Button';

const FormText = () => {
  const { changeEditMoode } = useContext(titleContext);
  const [inputText, setInputText]=useState()

  const sbmitEdit=()=>{
     changeEditMoode(false)
  }

  return (
    <Box  sx={{
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'column',
      p: 1,
      m: 2,
      bgcolor: 'background.paper',
      borderRadius: 1,
    }}>
      <TextField
      sx={{margin:"10px 0" , width:"100%"}}
        id="standard-read-only-input"
        label="Title"
        defaultValue="Hello World"
        InputProps={{
          readOnly: true,
        }}
        variant="standard"
      />
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Age
          </InputLabel>
          <NativeSelect
            defaultValue={30}
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
          >
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </NativeSelect>
        </FormControl>
      </Box>
      <TextField
        id="standard-helperText"
        label="Description"
        placeholder="add skills here..."
        variant="standard"
        onChange={(e)=>setInputText(e.target.value)}
      />
      <Button variant="text" onClick={sbmitEdit}>EDIT</Button>
    </Box>
  );
};

export default FormText;
