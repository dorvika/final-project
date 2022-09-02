import { Grid, Card, CardMedia, Typography, Button } from "@mui/material";
import { useState } from "react";
import { CustomCardContent, HoverCardContent } from "./styles";

const ProductCard = ({ image, title, price, size, itemNo }) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <Grid item xs={4} position="relative" marginTop="10px">
      <Card onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <CardMedia
          component="img"
          image={`${image}`}
          alt={`${title}`}
        ></CardMedia>
        {isHover ? (
          <HoverCardContent>
            <Typography
              variant="h5"
              color="secondary"
              sx={{ pb: "5px", textTransform: "capitalize" }}
            >
              {title}
            </Typography>
            <Typography
              variant="h6"
              color="secondary"
              sx={{ pb: "15px", textTransform: "capitalize" }}
            >
              size: {size}
            </Typography>
            <Typography
              variant="h2"
              fontWeight="700"
              color="secondary"
              letterSpacing="0"
              lineHeight="25px"
              paddingBottom="20px"
            >
              $ {price}
            </Typography>
            <Button
              href={`/categories/${itemNo}`}
              variant="outlined"
              sx={{ p: "10px 35px", lineHeight: "16px" }}
            >
              buy now
            </Button>
          </HoverCardContent>
        ) : (
          <CustomCardContent sx={{ backgroundColor: "primary.main" }}>
            <Typography
              sx={{ padding: "4px 8px", textTransform: "capitalize" }}
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
