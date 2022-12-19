import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CourseContent2 from "./TIEECNavContent.jsx/CourseContent2";
import Overviewer2 from './TIEECNavContent.jsx/Overview2';
import { styled } from "@mui/system";

const StyledTab = styled(Tabs)`

padding: 0 2%; 

  & .MuiTab-textColorInherit {
    font-size: 0.8rem;
    font-weight: 600;
  }


@media (max-width: 700px){

  & .MuiTab-textColorInherit {
    font-size: 0.5rem;
    font-weight: 600;
  }
}
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
      <AppBar position="static">
        <StyledTab
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="scrollable"
          aria-label="full width tabs example"
          centered
          allowScrollButtonsMobile
          sx={{backgroundColor: 'rgba(152, 0, 0, 1)'}}
        >
          
            <Tab sx={{ml: 3}}label="Course Overview" {...a11yProps(0)} />
            <Tab label="Course Content" {...a11yProps(1)} />
            <Tab label="Requirement" {...a11yProps(2)} />
            <Tab label="Instructors" {...a11yProps(3)} />
         
        </StyledTab>
      </AppBar>
      <Box axis={theme.direction === "rtl" ? "x-reverse" : "x"} index={value}>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Overviewer2 />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <CourseContent2/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Item Three
        </TabPanel>
      </Box>
    </Box>
  );
}
