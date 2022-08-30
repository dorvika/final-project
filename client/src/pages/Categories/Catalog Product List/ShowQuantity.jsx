import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Box, Button, Fade, MenuItem } from "@mui/material";
import { useState } from "react";
// import { styled, alpha } from "@mui/material/styles";
import { StyledMenu } from "./styles";

const SortPanel = () => {
  const options = [9, 18, 27];

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
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
          {options.map((option) => {
            return (
              <MenuItem key={option} onClick={handleClose}>
                {option}
              </MenuItem>
            );
          })}
          {/* <MenuItem onClick={handleClose}>36</MenuItem>
          <MenuItem onClick={handleClose}>All</MenuItem> */}
        </StyledMenu>
      </Box>
    </>
  );
};

export default SortPanel;
