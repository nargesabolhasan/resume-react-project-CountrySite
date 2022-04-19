import React,{useContext} from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import Typography from "@mui/material/Typography";
import {titleContext} from "./Context/TitleContextprovider";

const Lists = () => {
  const {addToTitle,addToParagraph} = useContext(titleContext);
  const handleClick = (e) => { addToTitle(e.target.innerHTML)};

  return (
    <div>
      <Typography>Web Design</Typography>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {["HTML", "CSS"].map((value) => {
          const labelId = `checkbox-list-label-${value}`;
          return (
            <ListItem
              key={value}
              secondaryAction={
                <IconButton edge="end" aria-label="comments">
                  <CreateIcon />
                  <DeleteIcon />
                </IconButton>
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
      <Typography>Front-End</Typography>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {["JavaScript", "ReactJS"].map((value) => {
          const labelId = `checkbox-list-label-${value}`;
          return (
            <ListItem
              key={value}
              secondaryAction={
                <IconButton edge="end" aria-label="comments">
                  <CreateIcon />
                  <DeleteIcon />
                </IconButton>
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
      <Typography>Back-End</Typography>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {["NodeJS", "MongoDB"].map((value) => {
          const labelId = `checkbox-list-label-${value}`;
          return (
            <ListItem
              key={value}
              secondaryAction={
                <IconButton edge="end" aria-label="comments">
                  <CreateIcon />
                  <DeleteIcon />
                </IconButton>
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
