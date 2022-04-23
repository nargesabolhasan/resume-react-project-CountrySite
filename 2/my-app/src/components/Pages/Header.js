import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { NavLink, Outlet } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1,mx: "auto" }}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 , ml:20 }}>
                my skills within
              </Typography>
              <Typography variant="h2" component="div" sx={{ flexGrow: 1, ml:20 }}>
                Material UI
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" ,alignItems: "end"}}>
              <Button color="inherit">
                <NavLink
                  to="/Login"
                  style={(isActive) => ({
                    color: isActive ? "white" : "blue",
                    textDecorationLine: "none",
                  })}
                >
                  Login
                </NavLink>
              </Button>
              <Button color="inherit">
                <NavLink
                  style={(isActive) => ({
                    color: isActive ? "white" : "blue",
                    textDecorationLine: "none",
                  })}
                  to="/Dashboard"
                >
                  Dashboard
                </NavLink>
              </Button>
            </Box>
            <AddCircleIcon sx={{ color: "warning.main", fontSize: "70px" }} />
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
}
