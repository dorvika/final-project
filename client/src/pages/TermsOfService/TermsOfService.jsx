import { Breadcrumbs, Container, Link } from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";

import { ServiceTerms } from "../../components";

const TermsOfService = () => {
  return (
    <>
      <Container>
        <Breadcrumbs sx={{ pb: "30px" }}>
          <Link component={LinkRouter} underline="hover" color="inherit" to="/">
            Home
          </Link>
          <Link
            component={LinkRouter}
            underline="hover"
            color="inherit"
            to="/termsofservice"
          >
            Terms of Service
          </Link>
        </Breadcrumbs>
        <ServiceTerms />
      </Container>
    </>
  );
};

export default TermsOfService;
