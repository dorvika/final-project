import { Breadcrumbs, Link, Stack } from "@mui/material";
import { ProductCardContainer, ProductCardMainContainer } from "./styles.js";
import { MightLike, ProductInfo, ProductSlider } from "../../components";
import { useParams, Link as LinkRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "../../utils/api.js";
import Preloader from "../../utils/Preloader.jsx";

const ProductCard = () => {
  const { id } = useParams();

  const [productData, setProductData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const {
    itemNo,
    imageUrls,
    name,
    currentPrice,
    color,
    size,
    description,
    categories,
  } = productData;

  useEffect(() => {
    setIsLoading(true);
    fetchData(`products/${id}`).then((data) => {
      setProductData(data);
      setIsLoading(false);
    });
  }, [id]);

  const images = imageUrls?.filter((imageUrl, index) => index < 4);

  return (
    <ProductCardMainContainer>
      {isLoading && (
        <Stack height="200px" alignItems="center" justifyContent="center">
          <Preloader />
        </Stack>
      )}
      {Object.values(productData).length > 0 && (
        <>
          <Breadcrumbs
            sx={(theme) => ({
              mb: "30px",
              [theme.breakpoints.down("sm")]: { mb: "15px", fontSize: "16px" },
            })}
          >
            <Link
              component={LinkRouter}
              underline="hover"
              color="inherit"
              to="/"
            >
              Shop
            </Link>
            <Link
              component={LinkRouter}
              underline="hover"
              color="inherit"
              to="/catalog?perPage=9&startPage=1"
            >
              Catalog
            </Link>
            <Link
              component={LinkRouter}
              sx={{ textTransform: "capitalize" }}
              underline="hover"
              color="inherit"
              to={`/catalog?categories=${categories}&perPage=9&startPage=1`}
            >
              {categories}
            </Link>
            <Link
              component={LinkRouter}
              sx={{ textTransform: "capitalize" }}
              underline="hover"
              color="inherit"
              to={`/catalog/${itemNo}`}
            >
              {name}
            </Link>
          </Breadcrumbs>
          <ProductCardContainer>
            <ProductSlider imageUrls={images} />
            <ProductInfo
              id={itemNo}
              name={name}
              currentPrice={currentPrice}
              color={color}
              size={size}
              description={description}
              product={productData}
            />
          </ProductCardContainer>
          <MightLike
            sectionTitle="RELATED ITEMS"
            category={categories}
            id={id}
          />
        </>
      )}
    </ProductCardMainContainer>
  );
};

export default ProductCard;
