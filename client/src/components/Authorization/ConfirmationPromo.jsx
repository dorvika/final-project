import { Stack, Typography, Checkbox } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/Modal/actions";

const ConfirmationPromo = () => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeModal());
  };
  return (
    <>
      <Stack direction="row" spacing={10} marginTop="16px" marginBottom="20px">
        <Checkbox
          size="small"
          defaultChecked
          sx={{
            color: "#6FB7AC",
            "&.Mui-checked": {
              color: "#6FB7AC",
            },
          }}
        />
        <Typography variant="subtitle1">
          Let&#39;s get personal! We&#39;ll send you only the good stuff:
          Exclusive early access to Sale, new arrivals and promotions. No
          nasties.
        </Typography>
      </Stack>
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: 300, color: "#8C8C8C", mb: "30px" }}
      >
        By signing up you agree to{" "}
        <Link
          onClick={handleClose}
          to="/termsofservice"
          style={{
            textDecoration: "none",
            borderBottom: "1px solid",
            color: "inherit",
            fontWeight: 700,
          }}
        >
          Terms of Service{" "}
        </Link>
        and{" "}
        <Link
          onClick={handleClose}
          to="/privacypolicy"
          style={{
            textDecoration: "none",
            borderBottom: "1px solid",
            color: "inherit",
            fontWeight: 700,
          }}
        >
          Privacy Policy
        </Link>
      </Typography>
    </>
  );
};

export default ConfirmationPromo;
