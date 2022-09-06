import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  TextField,
  Stack,
  styled,
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material/";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, decreaseCartItem } from "../../../../store/Cart/actions"
const CustomCard = styled(Card)(({ theme }) => ({
  [theme.breakpoints.down("670")]: {
    "& .stack": {
      flexDirection: "column",
      width: "100%",
    },
    "& .cardmedia": {
      width: "100%",
      height: "200px",
      marginBottom: "15px",
    },
    "& .count-price": {
      flexDirection: "row",
      alignItems: "center",
      padding: "0 10px",
      justifyContent: "space-between",
      "& .MuiTypography-root": {
        paddingBottom: "0",
      },
    },
  },
}));

const BagCartModel = ({ imageUrls, currentPrice, name, description, itemNo, cartQuantity, _id, product }) => {
  const dispatch = useDispatch()
  let [quantityValue, setQuantityValue] = useState(cartQuantity);

  const handleQuantityChange = (event) => {
    setQuantityValue(event.target.value);
    console.log(quantityValue);
  };

  const increaseQuantity = () => {
    setQuantityValue(cartQuantity + 1);
    dispatch(
      addToCart({ imageUrls, currentPrice, name, description, _id, cartQuantity })
    )
  };
  const decreaseQuantity = () => {
    if (quantityValue > 1) {
      setQuantityValue((quantityValue = quantityValue - 1));
      dispatch(decreaseCartItem(product))
    }
  };
  return (
    <>
      <CustomCard
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: "20px",
        }}
      >
        <Stack direction="row" className="stack">
          <Link to={`/categories/${itemNo}`} style={{ textDecoration: "none" }}>
            <CardMedia
              className="cardmedia"
              component="img"
              height="200px"
              sx={{ width: "200px", mr: "80px" }}
              image={`${imageUrls[0]}`}
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
                  {name}
                </Typography>
              </Link>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "primary.main",
                  maxWidth: "380px",
                  pb: "27px",
                  lineHeight: "19px",
                }}
              >
                {description}
              </Typography>

              <Box
                className="count-price"
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Typography variant="h5" sx={{ pb: "10px" }}>
                  ${currentPrice}
                </Typography>
                <Stack direction="row" alignItems="center">
                  <TextField
                    value={quantityValue}
                    onChange={handleQuantityChange}
                    style={{ width: "50px" }}
                    size="small"
                  ></TextField>
                  <Stack>
                    <IconButton
                      variant="outlined"
                      onClick={increaseQuantity}
                      sx={{ padding: 0 }}
                    >
                      <ExpandLess fontSize="small" />
                    </IconButton>

                    <IconButton onClick={decreaseQuantity} sx={{ padding: 0 }}>
                      <ExpandMore sx={{ border: "1px" }} fontSize="small" />
                    </IconButton>
                  </Stack>
                </Stack>
              </Box>
            </Box>
          </CardContent>
        </Stack>
      </CustomCard>
    </>
  );
};

export default BagCartModel;
