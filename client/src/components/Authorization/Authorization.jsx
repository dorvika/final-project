import {
  Dialog,
  Slide,
  DialogContent,
  Tab,
  Box,
  IconButton,
} from "@mui/material";
import { Close } from "@mui/icons-material/";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { closeModal } from "../../store/Modal/actions";
import { useDispatch, useSelector } from "react-redux";
import { forwardRef, useState } from "react";
import SignUp from "./SignUp.jsx";
import Login from "./Login.jsx";
import { CustomTab } from "./styles";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Authorization = () => {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const [value, setValue] = useState("1");

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
          sx={{ pt: "0", pr: "55px", pl: "55px", maxWidth: "560px" }}
        >
          <Box sx={{ width: "100%", height: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box>
                <TabList
                  onChange={handleChange}
                  TabIndicatorProps={{ hidden: true }}
                  width="100%"
                >
                  <CustomTab label="Sign Up" value="1" />
                  <CustomTab label="Log in" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <SignUp />
                <TabList onChange={handleChange}>
                  <Tab
                    sx={{
                      color: "primary.main",
                      backgroundColor: "primary.contrastText",
                      fontFamily: "Mulish",
                      textDecoration: "underline",
                      fontSize: 14,
                      fontWeight: 300,
                    }}
                    label="I have an account"
                    value="2"
                  />
                </TabList>
              </TabPanel>
              <TabPanel value="2">
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
