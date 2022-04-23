import React, { useContext } from "react";
import { IsLogin } from "../Context/IsLogin";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

const Dashboard = () => {
  const { isLogin } = useContext(IsLogin);

  let navigate = useNavigate();

  const handleBack = () => {
    navigate("/Login", { replace: true });
  };
  
  return (
    <div>
      {isLogin ? (
        <Typography>hi <SentimentVerySatisfiedIcon/></Typography>
      ) : (
        <Box sx={{ mt: 20 }}>
          <Typography variant="h3" sx={{ color: "warning.main" }}>
            you have to login !
          </Typography>
          <Button
            sx={{ mt: 10 }}
            variant="outlined"
            color="warning"
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
