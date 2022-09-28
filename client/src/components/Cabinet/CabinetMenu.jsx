import { useState } from "react";
import PropTypes from "prop-types";
import { Tabs, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import PersonalInformation from "./PersonalInformation/PersonalInformation.jsx";
import { CustomCabinetTab } from "./style.js";
import Subscriptions from "./Subscriptions.jsx";
import MyOrders from "./Orders/MyOrders.jsx";
import WishList from "./Wishlist/Wishlist.jsx";
import {
  AccountCircleOutlined,
  ArchiveOutlined,
  FavoriteBorderOutlined,
  SubscriptionsOutlined,
} from "@mui/icons-material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      width="fit-content"
    >
      {value === index && (
        <Box
          sx={(theme) => ({
            [theme.breakpoints.up("sm")]: { pl: "30px", width: "100%" },
            [theme.breakpoints.down("sm")]: { pl: "10px", width: "100%" },
          })}
        >
          {children}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const CabinetMenu = () => {
  const [value, setValue] = useState(0);
  const matches = useMediaQuery("(max-width:900px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={(theme) => ({
        [theme.breakpoints.up("md")]: {
          display: "flex",
          mb: "130px",
        },
        [theme.breakpoints.down("md")]: {
          display: "flex",
          mb: "30px",
        },
      })}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical cabinet tab"
        sx={(theme) => ({
          textAlign: "left",
          borderRight: 1,
          borderColor: "divider",
          [theme.breakpoints.up("md")]: { width: "300px" },
        })}
      >
        {matches ? (
          <CustomCabinetTab
            icon={<AccountCircleOutlined size="small" sx={{ m: 0 }} />}
            {...a11yProps(0)}
          />
        ) : (
          <CustomCabinetTab label="Personal Information" {...a11yProps(0)} />
        )}
        {matches ? (
          <CustomCabinetTab
            icon={<FavoriteBorderOutlined />}
            {...a11yProps(1)}
          />
        ) : (
          <CustomCabinetTab label="My wish list" {...a11yProps(1)} />
        )}

        {matches ? (
          <CustomCabinetTab icon={<ArchiveOutlined />} {...a11yProps(2)} />
        ) : (
          <CustomCabinetTab label="My orders" {...a11yProps(2)} />
        )}

        {matches ? (
          <CustomCabinetTab
            icon={<SubscriptionsOutlined />}
            {...a11yProps(3)}
          />
        ) : (
          <CustomCabinetTab label="My subscriptions" {...a11yProps(3)} />
        )}
      </Tabs>

      <TabPanel value={value} index={0}>
        <PersonalInformation />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <WishList />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MyOrders />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Subscriptions />
      </TabPanel>
    </Box>
  );
};

export default CabinetMenu;
