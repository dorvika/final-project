import {
  Container,
  Stack,
  Typography,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Check } from "@mui/icons-material";
import { CustomLink, StyledTableCell, StyledTableRow } from "./styles";

const Payment = () => {
  return (
    <Container>
      <Typography variant="h2" textAlign="center" mb="20px">
        Delivery
      </Typography>
      <Stack direction={{ xs: "column", sm: "row" }} gap={10} mb="20px">
        <Stack sx={{ width: { sx: "100%", sm: "50%" } }}>
          <Stack direction="row" gap="5px" mb="10px">
            <Check color="primary" />
            <Typography>
              Most orders are processed within 2-5 business days for standard
              delivery and one business day for express delivery.
            </Typography>
          </Stack>
          <Stack direction="row" gap="5px" mb="10px">
            <Check color="primary" />
            <Typography>
              For standard shipping method, please place your order by 11:00 for
              the best chance of same business day processing.
            </Typography>
          </Stack>
          <Stack direction="row" gap="5px" mb="10px">
            <Check color="primary" />
            <Typography>
              Orders placed on weekends and select holidays begin processing the
              next business day. Please allow for an additional 2 business days
              for gift wrap orders to be processed.
            </Typography>
          </Stack>
        </Stack>
        <Stack sx={{ width: { sx: "100%", sm: "50%" } }}>
          <TableContainer component={Paper}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>
                    <Typography
                      variant="caption"
                      fontSize={26}
                      sx={{ color: "white" }}
                    >
                      Delivery Method
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Typography
                      variant="caption"
                      fontSize={26}
                      sx={{ color: "white" }}
                    >
                      Price
                    </Typography>
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    Standard (2-5 Business Days)
                  </StyledTableCell>
                  <StyledTableCell align="right">Free</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    Express (24 hours from checkout)
                  </StyledTableCell>
                  <StyledTableCell align="right">10$</StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </Stack>
      <Typography variant="h2" textAlign="center" mb="20px">
        Payment
      </Typography>
      <Typography mb="10px">
        We have two payment options. Choose the method that is more convenient
        for you:
      </Typography>
      <Stack direction="row" gap="5px" mb="5px">
        <Check color="primary" />
        <Typography>Credit Card</Typography>
      </Stack>
      <Stack direction="row" gap="5px">
        <Check color="primary" />
        <Typography>
          Payment to the courier (cash or card payment to the courier upon
          delivery)
        </Typography>
      </Stack>
      <Stack justifyContent="center">
        <CustomLink to="/catalog?perPage=9&startPage=1">
          Go to shopping
        </CustomLink>
      </Stack>
    </Container>
  );
};

export default Payment;
