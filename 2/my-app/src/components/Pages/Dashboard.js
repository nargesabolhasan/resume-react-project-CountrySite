import React, { useContext } from "react";
import { IsLogin } from "../Context/IsLogin";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import ISAuth from "./ISAuth";

const Dashboard = () => {
  const { isLogin } = useContext(IsLogin);
 

  let navigate = useNavigate();

  const handleBack = () => {
    navigate("/Login", { replace: true });
  };

  const handleBackHome = () => {
    navigate("/", { replace: true });
  };

  return (
    <div>
      {isLogin ? (
        <Box sx={{mt: 30 }}>
          <Typography variant="h3" sx={{ color: "success.main"}}>
            welcome <SentimentVerySatisfiedIcon sx={{ fontSize: "50px" }} />
          </Typography>
          <ISAuth/>
          <Button
            sx={{ mt: 10 }}
            variant="outlined"
            onClick={handleBackHome}
          >
            <KeyboardBackspaceIcon />
            Back to Home page
          </Button>
        </Box>
      ) : (
        <Box sx={{ mt: 20 }}>
          <Typography variant="h3" sx={{ color: "warning.main" }}>
            you have to login !
          </Typography>
          <Button
            sx={{ mt: 10 }}
            variant="outlined"
            onClick={handleBack}
          >
            <KeyboardBackspaceIcon />
            Back to login page
          </Button>
        </Box>
      )}
    </div>
  );
};

export default Dashboard;
