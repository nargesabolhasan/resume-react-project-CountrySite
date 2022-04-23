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

const Lists = () => {
  const {addToText,text,changeEditMoode} = useContext(titleContext);
  //let items=["HTML", "CSS","JavaScript", "ReactJS","JavaScript", "MongoDB"]
  const handleClick = (e) => {
    addToText(e.target.textContent);
  };
  const handleEditText = () => {changeEditMoode(true)};
  const handleDeleteRow = () => {
    // items=items.filter(i=>i!==text)
  };

  return (
    <div>
      <Typography sx={{textAlign: 'center'}}>Web Design</Typography>
      <List sx={{ width: "100%", bgcolor: "background.paper",paddingTop:"50px"}}>
        {["HTML", "CSS"].map((value) => {
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
      <Typography sx={{textAlign: 'center'}}>Front-End</Typography>
      <List sx={{ width: "100%", bgcolor: "background.paper",paddingTop:"50px"}}>
        {["JavaScript", "ReactJS"].map((value) => {
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
      <Typography sx={{textAlign: 'center'}}>Back-End</Typography>
      <List sx={{ width: "100%", bgcolor: "background.paper",paddingTop:"50px"}}>
        {["JavaScript", "MongoDB"].map((value) => {
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

export default Lists;
