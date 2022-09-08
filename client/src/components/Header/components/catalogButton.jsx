import {
  Button,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useEffect, useState, useRef } from "react";
import { fetchData } from "../../../utils/api";
import { Link } from "react-router-dom";

const Catalog = () => {
  const [categories, setCategories] = useState([]);

  const allCategories = categories.map((category) => category.name).join();

  useEffect(() => {
    fetchData("/catalog").then((result) => setCategories(result));
  }, []);

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div>
      <Button
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        Catalog
        <KeyboardArrowDownIcon />
      </Button>
      <Popper
        sx={{ zIndex: "100" }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem>
                    <Link
                      to={`/catalog?categories=${allCategories}&perPage=9&startPage=1`}
                      style={{ textDecoration: "none" }}
                      onClick={handleClose}
                    >
                      <Typography
                        sx={{
                          textTransform: "capitalize",
                          fontWeight: "600",
                          lineHeight: "18px",
                          letterSpacing: "0.2px",
                          padding: "0 30px 0 10px",
                        }}
                        variant="body"
                      >
                        shop all
                      </Typography>
                    </Link>
                  </MenuItem>
                  {categories.map((category) => (
                    <MenuItem key={category.id}>
                      <Link
                        to={`/catalog?categories=${category.name}&perPage=9&startPage=1`}
                        style={{ textDecoration: "none" }}
                        onClick={handleClose}
                      >
                        <Typography
                          variant="body"
                          sx={{
                            textTransform: "capitalize",
                            fontWeight: "600",
                            lineHeight: "18px",
                            letterSpacing: "0.2px",
                            padding: "0 30px 0 10px",
                          }}
                        >
                          {category.name}
                        </Typography>
                      </Link>
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default Catalog;
