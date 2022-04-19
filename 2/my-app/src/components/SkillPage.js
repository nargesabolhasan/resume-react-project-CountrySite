import React,{useContext} from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Lists from "./Lists";
import {titleContext} from "./Context/TitleContextprovider";

export default function CheckboxList() {

    const {title,paragraph} = useContext(titleContext);

  return (
    <Container
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        textAlign: "start",
        marginTop: "20px",
      }}
    >
      <Divider
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
          textAlign: "center",
        }}
      >
        <Lists/>
      </Divider>
      <Divider
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
          textAlign: "start",
        }}
      >
        <Typography>{title}</Typography>
        <Typography>{paragraph}</Typography>
      </Divider>
    </Container>
  );
}
