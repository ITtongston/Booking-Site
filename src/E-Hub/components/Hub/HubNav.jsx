import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Trainingroom from "./HubCont/Trainingroom";
import CoworkSpace from "./HubCont/Coworkspace";
import VirtualOffice from "./HubCont/VirtualOffice";
import MeetingRoom from "./HubCont/MeetingRoom";

const StyledTabs = styled(Tabs)`
  & .MuiTab-textColorInherit {
    color: rgb(26, 26, 26);
    font-size: 1rem;
    font-weight: 600;
  }

  & .MuiTab-textColorInherit:hover {
    color: black;
  }

  & .MuiTabs-indicator {
    color: rgb(26, 26, 26);
    background-color: rgb(179, 36, 0);
    height: 4px;
    border-radius: 2px;
  }
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      sx={{ my: 10 }}
    >
      {value === index && (
        <Box>
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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "90%", margin: "8rem auto 5rem" }}>
      <Box>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            fontSize: { sm: "30px", xs: "20px" },
            mb: "2em",
            color: "#373434",
          }}
          id="workSpace"
        >
          WorkSpace Profitability with Our Entrepreneurial WorkSpaces
        </Typography>
        <Box sx={{ borderBottom: 1, borderColor: "divider", my: "1em" }}>
          <StyledTabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            indicatorColor="Secondary"
            sx={{ color: "black", textAlign: "center" }}
            variant="scrollable"
            allowScrollButtonsMobile
          >
            <Tab label="Meeting Room" {...a11yProps(3)} />
            <Tab label="Training Room" {...a11yProps(0)} />
            <Tab label="CoWorking Space" {...a11yProps(2)} />
            <Tab label="Virtual Office" {...a11yProps(1)} />
            {/* <Tab label="Media,Finance,Admin,HR,Data and Legal Services" {...a11yProps(4)} />
          <Tab label="Programmers Den" {...a11yProps(5)} /> */}
          </StyledTabs>
        </Box>
        <TabPanel value={value} index={0}>
          <MeetingRoom />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Trainingroom />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <CoworkSpace />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <VirtualOffice />
        </TabPanel>
      </Box>
    </Box>
  );
}
