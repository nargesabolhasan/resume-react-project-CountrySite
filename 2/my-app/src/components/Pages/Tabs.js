import React,{ useContext} from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Lists from "./Lists";
import TabLists from "./TabLists";
import Description from "./Description";
import FormText from "./FormText";
import { titleContext } from "../Context/TitleContextprovider";
import { Grid } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
    const { text, editMoode } = useContext(titleContext);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          textAlign: "start",
          marginTop: "20px",
          width: "100%",
          border:1.5,
          borderColor: 'grey.300',
          height: "550px"
        }}
      >
       
        {/* <TabPanel value={value} index={0} subject="All">
          <Lists />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TabLists item1="HTML" item2="CSS" subject="Web Design" />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <TabLists item1="JavaScript" item2="ReactJS" subject="Front-End" />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <TabLists item1="NodeJS" item2="MongoDB" subject="Back-End" />
        </TabPanel> */}

        {editMoode ? <FormText/> : <Description />}

      </Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
        >
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Web Design" {...a11yProps(1)} sx={{marginLeft:"25px"}}/>
          <Tab label="Front-End" {...a11yProps(2)}  sx={{marginLeft:"25px"}}/>
          <Tab label="Back-End" {...a11yProps(3)} sx={{marginLeft:"25px"}}/>
        </Tabs>
      </Box>
    </>
  );
}
