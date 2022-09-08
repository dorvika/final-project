import {
  Dialog,
  Slide,
  DialogContent,
  Tabs,
  Box,
  IconButton,
  // Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material/";
import { TabContext } from "@mui/lab";
import { closeModal } from "../../store/Modal/actions";
import { useDispatch, useSelector } from "react-redux";
import { forwardRef, useState } from "react";
import SignUp from "./SignUp.jsx";
import Login from "./Login.jsx";
import { CustomTab } from "./styles";
// import PropTypes from "prop-types";
import TabPanel from "@mui/lab/TabPanel";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

// function TabPanel(props) {
//   const { value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {/* {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )} */}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

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
          sx={{ pt: "0", pr: "55px", pl: "55px", maxWidth: "560px" }}
        >
          <Box sx={{ width: "100%", height: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box>
                {/* <TabList
                  onChange={handleChange}
                  TabIndicatorProps={{ hidden: true }}
                  width="100%"
                >
                  <CustomTab label="Sign Up" value={"one"} />
                  <CustomTab label="Log in" value={"two"} />
                </TabList> */}
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
              <TabPanel
                // role="tabpanel"
                // hidden={value !== 1}
                // id={`simple-tabpanel-${0}`}
                // aria-labelledby={`simple-tab-${0}`}
                // {...other}
                value={0}
                index={0}
              >
                <SignUp />
                {/* <TabList onChange={handleChange}>
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
                  value="two"
                />
              </TabList> */}
                {/* <TabPanel
                sx={{
                  color: "primary.main",
                  backgroundColor: "primary.contrastText",
                  fontFamily: "Mulish",
                  textDecoration: "underline",
                  fontSize: 14,
                  fontWeight: 300,
                }}
                label="I have an account"
                value="value"
                index={1}
              >
                <Typography variant="subtitle1">I have an account</Typography>
              </TabPanel> */}
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
