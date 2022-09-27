import { Stack } from "@mui/material";

const Preloader = () => {
  return (
    <Stack direction="row" alignItems="center" justifyContent="center">
      <div className="preloader">
        <div className="dot dot2 d21"></div>
        <div className="dot dot2 d22"></div>
        <div className="dot dot2 d23"></div>
      </div>
    </Stack>
  );
};
export default Preloader;
