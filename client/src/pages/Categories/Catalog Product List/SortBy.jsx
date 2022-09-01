import { Box, Button, Fade, MenuItem } from "@mui/material";
import { useState } from "react";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { StyledMenu } from "./styles";

const SortPanel = ({ filterObj, setFilterObj }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const setSortBy = (sortBy) => {
    setFilterObj({ ...filterObj, sort: sortBy });
    handleClose();
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
          sx={{ p: "10px 0" }}
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
          {/* <MenuItem onClick={handleClose}>Best Match</MenuItem>
          <MenuItem onClick={handleClose}>Featured</MenuItem> */}
          <MenuItem onClick={() => setSortBy("currentPrice")}>
            Lowest Price
          </MenuItem>
          <MenuItem onClick={() => setSortBy("-currentPrice")}>
            Highest Price
          </MenuItem>
        </StyledMenu>
      </Box>
    </>
  );
};

export default SortPanel;
