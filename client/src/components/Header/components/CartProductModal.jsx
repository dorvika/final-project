import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Stack,
} from "@mui/material";
import { Cancel } from "@mui/icons-material/";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../store/cart/actions";

const CartProductModal = ({ product }) => {
  const { imageUrls, currentPrice, name, color, size, _id, itemNo } = product;
  const dispatch = useDispatch();

  const handleRemoveProduct = (event) => {
    event.preventDefault();
    dispatch(removeFromCart(_id));
  };

  return (
    <>
      <Card
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "400px",
        }}
      >
        <Stack direction="column">
          <Link
            to={`/catalog/${itemNo}`}
            style={{
              position: "relative",
              textDecoration: "none",
              width: "320px",
              height: "400px",
              display: "block",
            }}
          >
            <Box
              onClick={handleRemoveProduct}
              sx={{
                zIndex: "30000",
                position: "absolute",
                top: "15px",
                right: "15px",
              }}
            >
              <IconButton sx={{ color: "primary" }}>
                <Cancel />
              </IconButton>
            </Box>
            <CardMedia
              component="img"
              image={`${imageUrls[0]}`}
              sx={{
                maxWidth: "320px",
                height: "400px",
                mr: "80px",
                mt: "10px",
              }}
            ></CardMedia>
          </Link>

          <CardContent
            sx={{
              position: "relative",
              top: "-138px",
              left: "8px",
            }}
          >
            <Box>
              <Link
                to={`/catalog/${itemNo}`}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="h5"
                  fontFamily="Abel"
                  sx={{
                    width: "fit-content",
                    backgroundColor: "primary.main",
                    color: "primary.contrastText",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    pb: "8px",
                    fontWeight: "200",
                    fontSize: 22,
                    px: "4px",
                  }}
                >
                  {name}
                </Typography>
              </Link>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "fit-content",
                      backgroundColor: "primary.main",
                      color: "primary.contrastText",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        textTransform: "uppercase",
                        fontWeight: "200",
                        px: "4px",
                      }}
                    >
                      Color: {color}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "primary.main",
                      width: "fit-content",
                      color: "primary.contrastText",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        textTransform: "uppercase",
                        fontWeight: "200",
                        mt: "8px",
                        px: "4px",
                      }}
                    >
                      size: {size}
                    </Typography>
                  </Box>

                  <Typography
                    variant="h5"
                    sx={{
                      pt: "8px",
                      width: "fit-content",
                      backgroundColor: "primary.main",
                      color: "primary.contrastText",
                      fontWeight: "200",
                      px: "4px",
                    }}
                  >
                    USD ${currentPrice}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Stack>
      </Card>
    </>
  );
};

export default CartProductModal;
