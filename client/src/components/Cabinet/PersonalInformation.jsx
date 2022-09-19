import { Typography, Stack, Box, Divider, Button } from "@mui/material";
import { useSelector } from "react-redux";

const PersonalInformation = () => {
  const { userData } = useSelector((state) => state.loggedIn);
  console.log(userData);

  return (
    <>
      {/* <Stack justifyContent="center"> */}
      <Typography variant="h2">Personal Information</Typography>

      <Divider />
      <Stack direction="row" justifyContent="space-around" marginTop="20px">
        <Box>
          <Typography variant="h3">First Name:</Typography>
          <Typography marginTop="15px" variant="h3">
            {userData.firstName}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h3">Last Name:</Typography>
          <Typography marginTop="15px" variant="h3">
            {userData.lastName}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h3">Login:</Typography>
          <Typography marginTop="15px" variant="h3">
            {userData.login}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h3">Email:</Typography>
          <Typography marginTop="15px" variant="h3">
            {userData.email}
          </Typography>
        </Box>
      </Stack>
      <Button variant="contained">Edit your data</Button>
      <Button variant="contained">Change Password</Button>
      {/* </Stack> */}
    </>
  );
};
export default PersonalInformation;
