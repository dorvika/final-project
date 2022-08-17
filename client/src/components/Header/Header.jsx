import { Button } from "@mui/material";
import Authorization from "../Authorization/Authorization.jsx";
import { openModal } from "../../store/Modal/actions";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);

  const handleOpen = () => {
    dispatch(openModal());
    console.log(dispatch(openModal));
    console.log(modal);
  };
  return (
    <header>
      <Button onClick={handleOpen}>login</Button>
      {modal && <Authorization />}
    </header>
  );
};

export default Header;
