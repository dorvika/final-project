import { Box, Button, Fade, MenuItem } from "@mui/material";
import { useState } from "react";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { StyledMenu } from "./styles";

const SortPanel = () => {
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
          variant="text"
          id="fade-button-sort"
          aria-controls={open ? "fade-menu-sort" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          endIcon={open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        >
          Sort by
        </Button>
        <StyledMenu
          id="fade-menu-sort"
          MenuListProps={{
            "aria-labelledby": "fade-button-sort",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleClose}>Best Match</MenuItem>
          <MenuItem onClick={handleClose}>Featured</MenuItem>
          <MenuItem onClick={handleClose}>Lowest Price</MenuItem>
          <MenuItem onClick={handleClose}>Highest Price</MenuItem>
        </StyledMenu>
      </Box>
    </>
  );
};

export default SortPanel;
