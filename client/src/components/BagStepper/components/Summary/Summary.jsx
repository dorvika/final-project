import { Stack, Typography,Box } from "@mui/material"
import { CustomHr } from "../../../Cart/index";

const Summary = ({subtotal, shipping}) => {
  const taxes = +(subtotal * 0.05).toFixed(0)
  const totalPrice = () => {
    return shipping === "nextday" ? subtotal+taxes+10 : subtotal+taxes
  }
  return (
    <>
    <Stack spacing={10} sx={{ p: "13px 0" }}>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="body" sx={{textTransform: "uppercase"}}>SUBTOTAL</Typography>
                      <Typography variant="body" sx={{textTransform: "uppercase"}}>${subtotal}</Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="body" sx={{textTransform: "uppercase"}}>Shipping</Typography>
                      <Typography variant="body" sx={{textTransform: "uppercase"}}>{shipping === "nextday" ? "nextday - 10$" : "free"}</Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="body" sx={{textTransform: "uppercase"}}>TAXES</Typography>
                      <Typography variant="body" sx={{textTransform: "uppercase"}}>${taxes}</Typography>
                    </Box>
                  </Stack>
                  <CustomHr />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mt: "20px",
                      mb: "50px",
                    }}
                  >
                    <Typography variant="body" sx={{ fontSize: "24px", textTransform: "uppercase" }}>
                      TOTAL
                    </Typography>
                    <Typography variant="body" sx={{ fontSize: "24px", textTransform: "uppercase" }}>
                      ${totalPrice()}
                    </Typography>
                  </Box>
    </>
  )
}

export default Summary