import * as React from "react";
import PropTypes from "prop-types";
import { Tabs } from "@mui/material";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CustomTab } from "../Authorization/styles";
import PersonalInformation from "./PersonalInformation.jsx";
import MyBasket from "./MyBasket.jsx";

// import TabPanel from "@mui/lab/TabPanel";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      paddingLeft="30px"
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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // console.log(event.target);
  };

  return (
    <Box
      sx={{
        // flexGrow: 1,
        // bgcolor: "background.paper",
        display: "flex",
        // height: 224,
      }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
        }}
      >
        <CustomTab label="Personal Information" {...a11yProps(0)} />
        <CustomTab label="My favorites list" {...a11yProps(1)} />
        <CustomTab label="My basket" {...a11yProps(2)} />
        <CustomTab label="My orders" {...a11yProps(3)} />
        <CustomTab label="My subscriptions" {...a11yProps(4)} />
        {/* <CustomTab label="Item Six" {...a11yProps(5)} />
        <CustomTab label="Item Seven" {...a11yProps(6)} /> */}
      </Tabs>
      <TabPanel sx={{ p: "0 0 0 30px" }} value={value} index={0}>
        <PersonalInformation />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Favorites
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MyBasket />
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      {/* <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel> */}
    </Box>
  );
};

export default CabinetMenu;
