import { useState } from "react";
import PropTypes from "prop-types";
import { Tabs } from "@mui/material";
import Box from "@mui/material/Box";
import PersonalInformation from "./PersonalInformation/PersonalInformation.jsx";
import { CustomCabinetTab } from "./style.js";
import Subscriptions from "./Subscriptions.jsx";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      width="100%"
    >
      {value === index && <Box sx={{ pl: 30, width: "100%" }}>{children}</Box>}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const CabinetMenu = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        mb: "130px",
      }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          textAlign: "left",
          borderRight: 1,
          borderColor: "divider",
        }}
      >
        <CustomCabinetTab label="Personal Information" {...a11yProps(0)} />
        <CustomCabinetTab label="My wish list" {...a11yProps(1)} />
        <CustomCabinetTab label="My orders" {...a11yProps(2)} />
        <CustomCabinetTab label="My subscriptions" {...a11yProps(3)} />
      </Tabs>

      <TabPanel sx={{ p: "0 0 0 30px" }} value={value} index={0}>
        <PersonalInformation />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Favorites
      </TabPanel>
      <TabPanel value={value} index={2}>
        My orders
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Subscriptions />
      </TabPanel>
    </Box>
  );
};

export default CabinetMenu;
