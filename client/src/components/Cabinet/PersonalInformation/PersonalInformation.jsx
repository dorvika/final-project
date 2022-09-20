import {
  Typography,
  Stack,
  Box,
  Divider,
  Button,
  Avatar,
  Grid,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeAllFromCart } from "../../../store/cart/actions";
import { setLoggedOut } from "../../../store/isLogged/actions";
import ChangePassword from "./ChangePassword.jsx";

const PersonalInformation = () => {
  const { userData } = useSelector((state) => state.loggedIn);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(userData);

  const handleLogOut = () => {
    dispatch(setLoggedOut());
    dispatch(removeAllFromCart());
    navigate("/");
  };

  return (
    <>
      <Typography variant="h2">Personal Information</Typography>

      <Divider />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mt: "30px" }}
      >
        <Avatar
          alr={userData.firstName + " " + userData.lastName}
          src={userData.avatarUrl}
          sx={{ width: "100px", height: "100px" }}
        />
        <Button
          onClick={handleLogOut}
          variant="outlined"
          sx={{ p: "5px 30px" }}
        >
          Logout
        </Button>
      </Stack>
      <Box sx={{ flexGrow: 1, mt: "35px" }}>
        <Grid
          container
          spacing={{ sm: 10, md: 80 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={4} md={4}>
            <Typography variant="h3" color="neutral.main">
              First Name:
            </Typography>
            <Typography marginTop="15px" variant="h3">
              {userData.firstName}
            </Typography>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Typography variant="h3" color="neutral.main">
              Last Name:
            </Typography>
            <Typography marginTop="15px" variant="h3">
              {userData.lastName}
            </Typography>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Typography variant="h3" color="neutral.main">
              Gender:
            </Typography>
            <Typography marginTop="15px" variant="h3">
              {userData.gender ? userData.gender : "Not specified"}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, mt: "35px" }}>
        <Grid
          container
          spacing={{ sm: 10, md: 80 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={4} md={4}>
            <Typography variant="h3" color="neutral.main">
              Login:
            </Typography>
            <Typography marginTop="15px" variant="h3">
              {userData.login}
            </Typography>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Typography variant="h3" color="neutral.main">
              Email:
            </Typography>
            <Typography marginTop="15px" variant="h3">
              {userData.email}
            </Typography>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Typography variant="h3" color="neutral.main">
              Phone:
            </Typography>
            <Typography marginTop="15px" variant="h3">
              {userData.telephone ? userData.telephone : "Not specified"}
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ mt: "35px" }} />
      </Box>
      <Stack direction="column" alignItems="center">
        {/* <Divider /> */}
        <Button variant="contained" sx={{ p: "5px 50px", mt: "35px" }}>
          Edit
        </Button>

        {/* <Divider /> */}
      </Stack>
      <ChangePassword />
    </>
  );
};
export default PersonalInformation;
