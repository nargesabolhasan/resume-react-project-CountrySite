import React, { useContext, useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import Typography from "@mui/material/Typography";
import { titleContext } from "../Context/TitleContextprovider";

const TabLists = (props) => {
  const { item1, item2, subject } = props;
  const { addToText, text, changeEditMoode } = useContext(titleContext);
  const handleClick = (e) => {
    addToText(e.target.textContent);
  };
  const handleEditText = () => {
    changeEditMoode(true);
  };
  const handleDeleteRow = () => {};

  return (
    <div>
      <Typography sx={{textAlign: 'center'}}>{subject}</Typography>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {[item1, item2].map((value) => {
          const labelId = `checkbox-list-label-${value}`;
          return (
            <ListItem
              key={value}
              secondaryAction={
                <>
                  <IconButton
                    edge="end"
                    aria-label="comments"
                    onClick={handleEditText}
                  >
                    <CreateIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="comments"
                    onClick={handleDeleteRow}
                  >
                    <DeleteIcon />
                  </IconButton>
                </>
              }
              disablePadding
            >
              <ListItemButton role={undefined} onClick={handleClick} dense>
                <ListItemText id={labelId} primary={value} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default TabLists;
