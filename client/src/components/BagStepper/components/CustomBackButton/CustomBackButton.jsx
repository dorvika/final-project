import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Typography } from "@mui/material";

const CustomBackButton = ({ onClick }) => {
    return (
      <Typography
        variant="body"
        component="span"
        onClick={onClick}
        sx={{
          fontSize: "18px",
          textTransform: "uppercase",
          cursor: "pointer",
        }}
      >
        <ArrowBackIosNewIcon
          sx={{ fontSize: "16px", mr: "4px", verticalAlign: "middle" }}
        />
        Back
      </Typography>
    );
  };

  export default CustomBackButton