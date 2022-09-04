import { CardContent, CardMedia, Link } from "@mui/material";
import { dataElements } from "./data";
import {
  CustomBox,
  CustomContent,
  CustomItem,
  CustomLeftIcon,
  CustomRightIcon,
  CustomSlider,
  CustomSliderBox,
  CustomTitle,
} from "./styles";

const MightLike = ({ sectionTitle }) => {
  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 380;
  };
  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 380;
  };

  return (
    <CustomBox variant="section" component="section">
      <CustomTitle component="h3">{sectionTitle}</CustomTitle>
      <CustomSliderBox>
        <CustomLeftIcon onClick={slideLeft} />
        <CustomSlider id="slider" variant="div" component="div">
          {dataElements.length > 0 && (
            <>
              {dataElements.map(({ id, title, urlImage, price }) => (
                /* коли товари будуть приходити з БД - замінити лінку на href={`/categories/${itemNo}`} */
                <Link href={`/categories/${id}`} key={id}>
                  <CustomItem component="div">
                    <CardMedia
                      component="img"
                      height="380"
                      image={urlImage}
                      alt="might-like"
                    />
                    <CardContent
                      sx={{
                        position: "absolute",
                        bottom: "20px",
                        left: "20px",
                      }}
                    >
                      <CustomContent
                        component="p"
                        sx={{ marginBottom: "10px" }}
                      >
                        {title}
                      </CustomContent>
                      <CustomContent
                        component="span"
                        sx={{
                          fontWeight: "700",
                          fontSize: "24px",
                          padding: "0 10px",
                          textShadow: "0px 4px 1px rgba(0, 0, 0, 0.25)",
                        }}
                      >
                        ${price}
                      </CustomContent>
                    </CardContent>
                  </CustomItem>
                </Link>
              ))}
            </>
          )}
        </CustomSlider>
        <CustomRightIcon onClick={slideRight} />
      </CustomSliderBox>
    </CustomBox>
  );
};

export default MightLike;
