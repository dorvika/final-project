import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Stack,
} from "@mui/material";

import { Link } from "react-router-dom";

const BagCartModelSmall = ({ cartQuantity, product }) => {
  const { imageUrls, currentPrice, name, itemNo } = product
  return (
    <>
      <Card
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: "10px",
          mt: "10px",
        }}
      >
        <Stack direction="row">
          <Link to={`/catalog/${itemNo}`} style={{ textDecoration: "none" }}>
            <CardMedia
              component="img"
              height="100px"
              sx={{ width: "100px", mr: "30px" }}
              image={`${imageUrls[0]}`}
            ></CardMedia>
          </Link>
          <CardContent>
            <Box>
              <Link
                to={`/catalog/${itemNo}`}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="h4"
                  fontFamily="Abel"
                  sx={{
                    color: "primary.main",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    pb: "8px",
                  }}
                >
                  {name}
                </Typography>
              </Link>
              <Typography variant="h5" sx={{ pb: "10px" }}>
                ${currentPrice * cartQuantity}
              </Typography>
            </Box>
          </CardContent>
        </Stack>
      </Card>
    </>
  );
};

export default BagCartModelSmall;
