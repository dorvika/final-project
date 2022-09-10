import {
    Box,
    Typography,
    Card,
    CardMedia,
    CardContent,
    IconButton,
    Stack,
} from "@mui/material";
import { Close } from "@mui/icons-material/";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
    removeFromCart,
} from "../../../store/Cart/actions";

const CartProductModal = ({ product }) => {
    const {
        imageUrls,
        currentPrice,
        name,
        color,
        size,
        _id,
        itemNo,
    } = product;
    const dispatch = useDispatch();

    const handleRemoveProduct = () => {
        dispatch(removeFromCart(_id));
    };

    return (
        <>
            <Card
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    height: "400px",
                }}
            >
                <Stack direction="column">

                    <Link to={`/catalog/${itemNo}`} style={{ textDecoration: "none", width: "320px", height: "400px", marginTop: "-40px"}}>
                            <Box sx={{
                                zIndex: "3000",
                                position: "relative",
                                top: "45px",
                                left: "265px"
                            }}>
                                <IconButton
                                    onClick={handleRemoveProduct}>
                                    <Close/>
                                </IconButton>
                            </Box>
                            <CardMedia
                            component="img"

                            image={`${imageUrls[0]}`}
                            sx={{
                                width: "320px",
                                height: "400px",
                                mr: "80px" }}

                        >

                        </CardMedia>

                    </Link>

                    <CardContent sx={{
                        position: "relative",
                        top: "-168px",
                        left: "8px"
                    }}>
                        <Box>
                            <Link
                                to={`/catalog/${itemNo}`}
                                style={{ textDecoration: "none" }}
                            >
                                <Typography
                                    variant="h5"
                                    fontFamily="Abel"
                                    sx={{
                                        width: "auto",
                                        backgroundColor: "primary.main",
                                        color: "primary.contrastText",
                                        letterSpacing: "0.04em",
                                        textTransform: "uppercase",
                                        pb: "8px",
                                        fontWeight: "200",
                                    }}
                                >
                                    {name}
                                </Typography>
                            </Link>

                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Box>
                                    <Box sx={{ display: "flex", alignItems: "center",
                                        backgroundColor: "primary.main",
                                        color: "primary.contrastText",}}>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                textTransform: "uppercase",
                                                fontWeight: "200",
                                            }}
                                        >
                                            Color:
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                textTransform: "uppercase",
                                                fontWeight: "200",
                                            }}
                                        >
                                            {color}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "primary.main",
                                        color: "primary.contrastText",}}>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                textTransform: "uppercase",
                                                fontWeight: "200",
                                                mt: "8px",
                                            }}
                                        >
                                            size:
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                textTransform: "uppercase",
                                                fontWeight: "200",
                                                mt: "8px",
                                            }}
                                        >
                                            {size}
                                        </Typography>

                                    </Box>

                                    <Typography variant="h5" sx={{
                                        pt: "8px",
                                        backgroundColor: "primary.main",
                                        color: "primary.contrastText",
                                        fontWeight: "200",
                                    }}
                                    >
                                        USD ${currentPrice}
                                    </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </CardContent>
                </Stack>
            </Card>
        </>
    );
};

export default CartProductModal;