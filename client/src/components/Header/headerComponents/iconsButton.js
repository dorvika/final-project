
import {Box} from "@mui/system";
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom";

const Icons = () => {
    return(

    <Box
        sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "10%"
            }}>
        <Link style={{textDecoration: "none", color: "#373F41"}} to={"/profile"}><PersonIcon></PersonIcon></Link>
        <Link style={{textDecoration: "none", color: "#373F41"}} to={"/favorite"}><FavoriteIcon></FavoriteIcon></Link>
        <Link style={{textDecoration: "none", color: "#373F41"}} to={"/cart"}><ShoppingCartIcon></ShoppingCartIcon></Link>

    </Box>
    )
}

export default Icons