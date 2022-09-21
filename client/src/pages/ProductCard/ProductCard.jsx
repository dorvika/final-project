import { Breadcrumbs, Link, Stack } from "@mui/material";
import ProductInfo from "./ProductInfo.jsx";
import ProductSlider from "./ProductSlider.jsx";
import { ProductCardContainer, ProductCardMainContainer } from "./styles.js";
import { MightLike } from "../../components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "../../utils/api.js";
import { Preloader } from "../Categories/index.js";

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
  }, []);

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
            <Link underline="hover" color="inherit" href="/">
              Shop
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/catalog?perPage=9&startPage=1"
            >
              Catalog
            </Link>
            <Link
              sx={{ textTransform: "capitalize" }}
              underline="hover"
              color="inherit"
              href={`/catalog?categories=${categories}&perPage=9&startPage=1`}
            >
              {categories}
            </Link>
            <Link
              sx={{ textTransform: "capitalize" }}
              underline="hover"
              color="inherit"
              href={`/catalog/${itemNo}`}
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
