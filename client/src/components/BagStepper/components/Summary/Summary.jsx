import { Stack, Typography,Box } from "@mui/material"
import { CustomHr } from "../../../Cart/index";

const Summary = () => {
  return (
    <>
    <Stack spacing={10} sx={{ p: "13px 0" }}>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="body">SUBTOTAL</Typography>
                      <Typography variant="body">$490</Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="body">Shipping</Typography>
                      <Typography variant="body">FREE</Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="body">TAXES</Typography>
                      <Typography variant="body">$5</Typography>
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
                    <Typography variant="body" sx={{ fontSize: "24px" }}>
                      TOTAL
                    </Typography>
                    <Typography variant="body" sx={{ fontSize: "24px" }}>
                      $495
                    </Typography>
                  </Box>
    </>
  )
}

export default Summary