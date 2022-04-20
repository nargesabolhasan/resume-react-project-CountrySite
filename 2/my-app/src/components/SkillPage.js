import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Lists from "./Lists";
import { titleContext } from "./Context/TitleContextprovider";
import FormText from "./FormText";

export default function CheckboxList() {
  const { text, editMoode } = useContext(titleContext);

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
        <Lists />
      </Divider>

      <Divider
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
          textAlign: "start",
        }}
      >
        <Divider>
          {editMoode ? (
            <FormText />
          ) : (
            <Box>
              <Typography>{text.title}</Typography>
              <Typography>{text.paragraph}</Typography>
            </Box>
          )}
        </Divider>
      </Divider>
      
    </Container>
  );
}
