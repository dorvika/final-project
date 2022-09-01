import * as React from 'react'
import {Button, ClickAwayListener, Grow, MenuList, Paper, Popper, Typography} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {Link, useLocation, useSearchParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {setFilterParams} from "../../../store/Filters/actions";
import {fetchData} from "../../../utils/api";

const Catalog = () => {

    import {useEffect, useState} from "react";
    import {setFilterParams} from "/store/Filters/actions";
    import {fetchData} from "../../utils/api";

    const dispatch = useDispatch();
    let [searchParams, setSearchParams] = useSearchParams();
    const [filterObj, setFilterObj] = useState({
        categories: searchParams.get("bedding") || "",
        size: searchParams.get("bath") || "",
        color: searchParams.get("c") || "",
        fabric: searchParams.get("fabric") || "",
    });
    const [filteredProducts, setFilteredProducts] = useState([]);

    const selectedFilters = Object.keys(filterObj)
        .filter((key) => filterObj[key] !== "")
        .reduce((acc, key) => ({ ...acc, [key]: filterObj[key] }), {});

    const queryString = useLocation().search;

    useEffect(() => {
        dispatch(setFilterParams(selectedFilters));
        setSearchParams(selectedFilters);
        if (queryString) {
            fetchData(`/products/filter/${queryString}`).then((data) =>
                setFilteredProducts(data.products)
            );
        }
    }, [filterObj, queryString, dispatch, setSearchParams]);



    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

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
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);


    return(
        <div>
            <Button
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? 'composition-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                sx={{
                    margin: "0",
                    padding: "0",
                    background: "white",
                    fontFamily: "Mulish,san-serif",
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "25px",
                    textTransform: "capitalize",
                    color: "#373F41",
                    ":hover":{
                        background : "white"
                    },
                    ":active": {
                        background : "white"
                    }

                }}
            >
                Catalog
                <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
            </Button>
            <Popper
                sx={{zIndex: "100"}}
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
                                placement === 'bottom-start' ? 'left top' : 'left bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        flexDirection: "column",
                                        padding: "20px 50px"
                                    }}
                                    autoFocusItem={open}
                                    id="composition-menu"
                                    aria-labelledby="composition-button"
                                    onKeyDown={handleListKeyDown}
                                >

                                    <Link to="*" style={{textDecoration: "none", marginTop: "16px"}}><Typography sx={{
                                        fontFamily: "Mulish",
                                        fontSize: "16px",
                                        fontWeight: "600",
                                        lineHeight: "18px",
                                        letterSpacing: "0.20000000298023224px",
                                        textAlign: "left",
                                        ":hover": {
                                            textDecoration: "underline",
                                        }

                                    }} variant="body">Bedding</Typography></Link>
                                <Link to="*" style={{textDecoration: "none", marginTop: "16px"}}><Typography sx={{
                                        fontFamily: "Mulish",
                                        fontSize: "16px",
                                        fontWeight: "600",
                                        lineHeight: "18px",
                                        letterSpacing: "0.20000000298023224px",
                                        textAlign: "left",
                                    ":hover": {
                                            textDecoration: "underline",
                                        }
                                    }} variant="body">Bath</Typography></Link>
                                <Link to="*" style={{textDecoration: "none", marginTop: "16px"}}><Typography sx={{
                                        fontFamily: "Mulish",
                                        fontSize: "16px",
                                        fontWeight: "600",
                                        lineHeight: "18px",
                                        letterSpacing: "0.20000000298023224px",
                                        textAlign: "left",
                                    ":hover": {
                                            textDecoration: "underline",
                                        }
                                    }} variant="body">Kitchen</Typography></Link>
                                <Link to="*" style={{textDecoration: "none", marginTop: "16px"}}><Typography sx={{
                                        fontFamily: "Mulish",
                                        fontSize: "16px",
                                        fontWeight: "600",
                                        lineHeight: "18px",
                                        letterSpacing: "0.20000000298023224px",
                                        textAlign: "left",
                                    ":hover": {
                                            textDecoration: "underline",
                                        }
                                    }} variant="body">Windows</Typography></Link>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    )
}

export default Catalog