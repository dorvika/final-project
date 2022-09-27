import { Stack, Typography, Checkbox, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/modal/actions";

const ConfirmationPromo = ({ checked, handleChange, isCheckBox }) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeModal());
  };
  return (
    <>
      {isCheckBox && (
        <Stack
          direction="row"
          mt="20px"
          alignItems="center"
          sx={(theme) => ({
            [theme.breakpoints.down("sm")]: { mb: "10px" },
          })}
        >
          <Box>
            <Checkbox
              size="small"
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
              sx={{
                color: "#6FB7AC",
                "&.Mui-checked": {
                  color: "#6FB7AC",
                },
              }}
            />
          </Box>
          <Typography
            sx={(theme) => ({
              [theme.breakpoints.down("sm")]: { display: "none" },
            })}
            variant="subtitle1"
          >
            Let&#39;s get personal! We&#39;ll send you only the good stuff:
            Exclusive early access to Sale, new arrivals and promotions. No
            nasties.
          </Typography>
          <Typography
            sx={(theme) => ({
              [theme.breakpoints.up("sm")]: { display: "none" },
              fontSize: 12,
            })}
            variant="subtitle1"
          >
            Let&#39;s get personal! We&#39;ll send you only the good stuff.
          </Typography>
        </Stack>
      )}
      <Typography
        variant="subtitle1"
        sx={(theme) => ({
          [theme.breakpoints.down("sm")]: {
            fontSize: 12,
            color: "#8C8C8C",
            mb: "5px",
          },
          color: "#8C8C8C",
          m: "20px 0",
        })}
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
