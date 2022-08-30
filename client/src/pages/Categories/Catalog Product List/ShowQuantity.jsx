import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Box, Button, Fade, MenuItem } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newQuantity } from "../../../store/Filters/actions";
import { StyledMenu } from "./styles";

const SortPanel = () => {
  const options = [9, 18, 27];
  const dispatch = useDispatch();
  const { showQuantity } = useSelector((state) => state.filters);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuItemClick = (event, index) => {
    dispatch(newQuantity(options[index]));
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box>
        <Button
          id="fade-button-show"
          aria-controls={open ? "fade-menu-show" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          endIcon={open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          sx={{ p: "10px 0" }}
        >
          Show
        </Button>
        <StyledMenu
          id="fade-menu-show"
          MenuListProps={{
            "aria-labelledby": "fade-button-show",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          {options.map((option, index) => {
            return (
              <MenuItem
                key={option}
                selected={option === showQuantity}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            );
          })}
        </StyledMenu>
      </Box>
    </>
  );
};;;;

export default SortPanel;
