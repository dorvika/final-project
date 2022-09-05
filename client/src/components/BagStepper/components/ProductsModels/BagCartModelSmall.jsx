import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Stack,
} from "@mui/material";

import { Link } from "react-router-dom";

const BagCartModelSmall = ({ image, price, title, itemNo, cartQuantity }) => {
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
          <Link to={`/categories/${itemNo}`} style={{ textDecoration: "none" }}>
            <CardMedia
              component="img"
              height="100px"
              sx={{ width: "100px", mr: "30px" }}
              image={`${image}`}
            ></CardMedia>
          </Link>
          <CardContent>
            <Box>
              <Link
                to={`/categories/${itemNo}`}
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
                  {title}
                </Typography>
              </Link>
              <Typography variant="h5" sx={{ pb: "10px" }}>
                ${price * cartQuantity}
              </Typography>
            </Box>
          </CardContent>
        </Stack>
      </Card>
    </>
  );
};

export default BagCartModelSmall;
