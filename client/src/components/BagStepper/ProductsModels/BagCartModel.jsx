import {
    Box,
    Typography,
    Card,
    CardMedia,
    CardContent,
    IconButton,
    TextField,
    Stack,
  } from "@mui/material";
  import { ExpandMore, ExpandLess } from "@mui/icons-material/";
  import { useState } from "react";
  import { Link } from "react-router-dom";
  
  const BagCartModel = ({ image, price, title, subtitle, id }) => {
    let [quantityValue, setQuantityValue] = useState(1);
  
    const handleQuantityChange = (event) => {
      setQuantityValue(event.target.value);
      console.log(quantityValue);
    };
  
    const increaseQuantity = () => {
      setQuantityValue((quantityValue = quantityValue + 1));
    };
    const decreaseQuantity = () => {
      if (quantityValue > 1) {
        setQuantityValue((quantityValue = quantityValue - 1));
      }
    };
    return (
      <>
        <Card
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: "20px",
            mt: "20px",
          }}
        >
          <Stack direction="row">
            <Link to={`/categories/${id}`} style={{ textDecoration: "none" }}>
              <CardMedia
                component="img"
                height="200px"
                sx={{ width: "200px", mr: "80px" }}
                image={`${image}`}
              ></CardMedia>
            </Link>
            <CardContent>
              <Box>
                <Link to={`/categories/${id}`} style={{ textDecoration: "none" }}>
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
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "primary.main",
                    maxWidth: "380px",
                    pb: "27px",
                    lineHeight: "19px",
                  }}
                >
                  {subtitle}
                </Typography>
                <Typography variant="h5" sx={{ pb: "10px" }}>
                  ${price}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
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
        </Card>
      </>
    );
  };
  
  export default BagCartModel;
  