import {
  Grid,
  Card,
  CardMedia,
  //   CardContent,
  Typography,
  Button,
} from "@mui/material";
//   import products from "./ProductsData";
import { useState } from "react";
import { CustomCardContent, HoverCardContent } from "./styles";

const ProductCard = ({ id, image, title, price }) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <Grid item xs={4} position="relative">
      <Card onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <CardMedia
          component="img"
          image={`${image}`}
          alt={`${title}`}
        ></CardMedia>
        {isHover ? (
          <HoverCardContent>
            <Typography variant="h5" color="secondary" sx={{ pb: "20px" }}>
              {title}
            </Typography>
            <Typography
              variant="h2"
              fontWeight="700"
              color="secondary"
              letterSpacing="0"
              lineHeight="25px"
              paddingBottom="20px"
            >
              ${price}
            </Typography>
            <Button
              href={`/categories/${id}`}
              variant="outlined"
              sx={{ p: "10px 35px", lineHeight: "16px" }}
            >
              buy now
            </Button>
          </HoverCardContent>
        ) : (
          <CustomCardContent sx={{ backgroundColor: "primary.main" }}>
            <Typography
              sx={{ padding: "4px 8px" }}
              variant="h5"
              color="secondary"
            >
              {title}
            </Typography>
          </CustomCardContent>
        )}
      </Card>
    </Grid>
  );
};

export default ProductCard;
