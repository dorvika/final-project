import { Breadcrumbs, Container, Link, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { Link as LinkRouter } from "react-router-dom";
import { data } from "./data";
import { CustomReturnsBox, CustomReturnsButton } from "./styles";

const Returns = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const returnsItems = data.map(({ id, title, list, btnText }) => (
    <Stack width={{ xs: "100%", sm: "50%" }} alignItems="flex-start" key={id}>
      <Typography variant="h3" fontWeight={600} mb="20px" mt="10px">
        {title}
      </Typography>
      {list.map((item, index) => (
        <Typography mb="5px" key={index}>
          {item}
        </Typography>
      ))}
      <CustomReturnsButton>{btnText}</CustomReturnsButton>
    </Stack>
  ));

  return (
    <>
      <Container>
        <Breadcrumbs
          sx={(theme) => ({
            mb: "30px",
            [theme.breakpoints.down("sm")]: { mb: "15px", fontSize: "16px" },
          })}
        >
          <Link component={LinkRouter} underline="hover" color="inherit" to="/">
            Home
          </Link>
          <Link
            component={LinkRouter}
            underline="hover"
            color="inherit"
            to="/returns"
          >
            Returns
          </Link>
        </Breadcrumbs>
      </Container>
      <CustomReturnsBox>
        <Container>
          <Typography
            color="white"
            mb="20px"
            sx={{ m: "0 auto", textAlign: "center" }}
          >
            365 DAY GUARANTEE
          </Typography>
        </Container>
        <Typography
          color="white"
          mb="20px"
          variant="h4"
          textTransform="uppercase"
        >
          Free Returns
        </Typography>
        <Typography width="80%" color="white" mb="20px">
          Return any item* within 30 days for a full merchandise refund or
          return within 1 year of purchase for store credit equal to the
          original value of the item(s). Even if it&apos;s been washed or worn.
        </Typography>
        <CustomReturnsButton>START RETURN</CustomReturnsButton>
      </CustomReturnsBox>
      <Container sx={{ mb: "20px" }}>
        <Stack direction={{ xs: "column", sm: "row" }} gap="15px">
          {returnsItems}
        </Stack>
      </Container>
    </>
  );
};

export default Returns;
