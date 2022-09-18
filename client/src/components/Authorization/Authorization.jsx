import {
  Dialog,
  Slide,
  DialogContent,
  Tabs,
  Box,
  IconButton,
} from "@mui/material";
import { Close } from "@mui/icons-material/";
import { TabContext } from "@mui/lab";
import { closeModal } from "../../store/modal/actions";
import { useDispatch, useSelector } from "react-redux";
import { forwardRef, useState } from "react";
import SignUp from "./SignUp.jsx";
import Login from "./Login.jsx";
import { CustomTab } from "./styles";

import TabPanel from "@mui/lab/TabPanel";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Authorization = () => {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <Dialog
        open={modal}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <Box display="flex" alignItems="center" justifyContent="flex-end">
          <IconButton onClick={handleClose}>
            <Close size="small" fontSize="small" />
          </IconButton>
        </Box>

        <DialogContent
          sx={(theme) => ({
            [theme.breakpoints.up("sm")]: {
              pt: "0",
              pr: "55px",
              pl: "55px",
              maxWidth: "560px",
            },

            [theme.breakpoints.down("sm")]: {
              pt: "0",
              pr: "20px",
              pl: "20px",
              maxWidth: "560px",
            },
          })}
        >
          <Box sx={{ width: "100%", height: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  TabIndicatorProps={{ hidden: true }}
                >
                  <CustomTab label="Sign Up" {...a11yProps(0)} />
                  <CustomTab label="Log in" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <TabPanel value={0} index={0}>
                <SignUp />
              </TabPanel>
              <TabPanel value={1} index={1}>
                <Login />
              </TabPanel>
            </TabContext>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Authorization;
