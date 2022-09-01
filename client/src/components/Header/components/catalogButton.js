import * as React from 'react'
import {Button, ClickAwayListener, Grow, MenuList, Paper, Popper, Stack} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {useEffect, useState} from "react";
import {fetchData} from "../../../utils/api";

const Catalog = ( { setFilterObj, filterObj } ) => {

    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState(
        filterObj.categories || ""
    );

    const allCategories = categories.map((category) => category.name).join();

    useEffect(() => {
        fetchData("/catalog").then((result) => setCategories(result));
    }, []);



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

                                    <>
                                        <Stack style={{textDecoration: "none", marginTop: "16px"}}>
                                            <Button
                                                variant="body"
                                                sx={{
                                                    backgroundColor:
                                                        activeCategory === allCategories
                                                            ? "primary.main"
                                                            : "primary.contrastText",
                                                    color:
                                                        activeCategory === allCategories
                                                            ? "primary.contrastText"
                                                            : "primary.main",
                                                }}
                                                onClick={() => {
                                                    setFilterObj({
                                                        ...filterObj,
                                                        categories: allCategories,
                                                    });
                                                    setActiveCategory(allCategories);
                                                }}
                                            >
                                                shop all
                                            </Button>
                                            {categories.map((category) => (
                                                <Button
                                                    key={category.id}
                                                    variant="body"
                                                    sx={{
                                                        backgroundColor:
                                                            activeCategory === category.name
                                                                ? "primary.main"
                                                                : "primary.contrastText",
                                                        color:
                                                            activeCategory === category.name
                                                                ? "primary.contrastText"
                                                                : "primary.main",
                                                    }}
                                                    onClick={() => {
                                                        setFilterObj({
                                                            ...filterObj,
                                                            categories: category.name,
                                                        });
                                                        setActiveCategory(category.name);
                                                    }}
                                                >
                                                    {category.name}
                                                </Button>
                                            ))}
                                        </Stack>
                                    </>

                                {/*    <Link to="*" style={{textDecoration: "none", marginTop: "16px"}}><Typography sx={{*/}
                                {/*        fontFamily: "Mulish",*/}
                                {/*        fontSize: "16px",*/}
                                {/*        fontWeight: "600",*/}
                                {/*        lineHeight: "18px",*/}
                                {/*        letterSpacing: "0.20000000298023224px",*/}
                                {/*        textAlign: "left",*/}
                                {/*        ":hover": {*/}
                                {/*            textDecoration: "underline",*/}
                                {/*        }*/}

                                {/*    }} variant="body">Bedding</Typography></Link>*/}
                                {/*<Link to="*" style={{textDecoration: "none", marginTop: "16px"}}><Typography sx={{*/}
                                {/*        fontFamily: "Mulish",*/}
                                {/*        fontSize: "16px",*/}
                                {/*        fontWeight: "600",*/}
                                {/*        lineHeight: "18px",*/}
                                {/*        letterSpacing: "0.20000000298023224px",*/}
                                {/*        textAlign: "left",*/}
                                {/*    ":hover": {*/}
                                {/*            textDecoration: "underline",*/}
                                {/*        }*/}
                                {/*    }} variant="body">Bath</Typography></Link>*/}
                                {/*<Link to="*" style={{textDecoration: "none", marginTop: "16px"}}><Typography sx={{*/}
                                {/*        fontFamily: "Mulish",*/}
                                {/*        fontSize: "16px",*/}
                                {/*        fontWeight: "600",*/}
                                {/*        lineHeight: "18px",*/}
                                {/*        letterSpacing: "0.20000000298023224px",*/}
                                {/*        textAlign: "left",*/}
                                {/*    ":hover": {*/}
                                {/*            textDecoration: "underline",*/}
                                {/*        }*/}
                                {/*    }} variant="body">Kitchen</Typography></Link>*/}
                                {/*<Link to="*" style={{textDecoration: "none", marginTop: "16px"}}><Typography sx={{*/}
                                {/*        fontFamily: "Mulish",*/}
                                {/*        fontSize: "16px",*/}
                                {/*        fontWeight: "600",*/}
                                {/*        lineHeight: "18px",*/}
                                {/*        letterSpacing: "0.20000000298023224px",*/}
                                {/*        textAlign: "left",*/}
                                {/*    ":hover": {*/}
                                {/*            textDecoration: "underline",*/}
                                {/*        }*/}
                                {/*    }} variant="body">Windows</Typography></Link>*/}
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