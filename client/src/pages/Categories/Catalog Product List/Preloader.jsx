import { Stack } from "@mui/material";

const Preloader = () => {
  return (
    <Stack direction="row" alignItems="center" justifyContent="center">
      {/* <Typography variant="h4" color="primary.main" sx={{ mr: "100px" }}>
        products are loading
      </Typography> */}
      <div className="preloader">
        <div className="dot dot2 d21"></div>
        <div className="dot dot2 d22"></div>
        <div className="dot dot2 d23"></div>
      </div>
    </Stack>
  );
};
export default Preloader;
