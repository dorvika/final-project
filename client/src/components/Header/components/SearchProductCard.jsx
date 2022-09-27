import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";


const SearchProductCard = ({ name, image, price, id, size, handleClose }) => {
  return (
    <Box
      sx={{
        m: "10px",
        boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.35)",
        width: "370px",
      }}
    >
      <Link
        to={`/catalog/${id}`}
        style={{ textDecoration: "none" }}
        onClick={handleClose}
      >
        <Stack direction="row" gap={5} alignItems="center">
          <img src={image} alt={name} height="150" />
          <Stack alignItems="center" flexGrow={1} gap={5}>
            <Typography
              variant="h2"
              component="div"
              sx={{
                textTransform: "uppercase",
                fontSize: 22,
                lineHeight: 1.2,
                textAlign: "center",
                letterSpacing: 0,
              }}
            >
              {name}
            </Typography>
            <Typography
              variant="h2"
              component="div"
              sx={{ lineHeight: 1.2, letterSpacing: 0 }}
            >
              $ {price}
            </Typography>
            <Typography
              variant="h2"
              component="div"
              sx={{
                textTransform: "uppercase",
                lineHeight: 1.2,
                fontSize: 22,
                letterSpacing: 0,
              }}
            >
              {size}
            </Typography>
          </Stack>
        </Stack>
      </Link>
    </Box>
  );
};

export default SearchProductCard;
