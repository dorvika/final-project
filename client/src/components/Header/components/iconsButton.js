import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom";
import {IconsButtonContainer} from "./styles";



const Icons = () => {
    return(

    <IconsButtonContainer sx={theme => ({ [theme.breakpoints.down("md")]:{display: "none"} })}>
        <Link style={{textDecoration: "none", color: "#373F41"}} to={"/profile"}><PersonIcon></PersonIcon></Link>
        <Link style={{textDecoration: "none", color: "#373F41"}} to={"/favorite"}><FavoriteIcon></FavoriteIcon></Link>
        <Link style={{textDecoration: "none", color: "#373F41"}} to={"/cart"}><ShoppingCartIcon></ShoppingCartIcon></Link>
    </IconsButtonContainer>
    )
}

export default Icons