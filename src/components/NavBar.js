import React, { useState } from "react";
import { Link } from "gatsby";
import {
  AppBar,
  Button,
  Drawer,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Menu } from "@material-ui/icons";
import clsx from "clsx";
import NavBarLinks from "./NavBarLinks";
import logo from "../images/logo.svg";

const useStyles = makeStyles({
  flex: {
    flex: 1,
  },
  logo: {
    marginRight: "1em",
    width: "1.785rem",
    height: "auto",
  },
  title: {
    borderRadius: "3px",
    // color: "#CC5E00",
    textTransform: "none",
    letterSpacing: "unset",
    "&:hover,&:focus": {
      background: "transparent",
    },
  },
  appBar: {
    display: "flex",
    border: "0",
    padding: "0.5rem",
    marginBottom: "20px",
    width: "100%",
    transition: "all 150ms ease 0s",
    alignItems: "center",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    zIndex: "20",
  },
  toolBar: {
    width: "100%",
  },
  transparent: {
    backgroundColor: "transparent !important",
    boxShadow: "none",
  },
  white: {
    backgroundColor: "#FFF !important",
    boxShadow: "0px 12px 36px rgba(0, 0, 0, 0.04)",
  },
  appResponsive: {
    margin: "20px 10px",
  },
  drawerPaper: {
    width: "16rem",
  },
});

export default function NavBar(props) {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", headerColorChange);

    return function cleanup() {
      window.removeEventListener("scroll", headerColorChange);
    };
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const headerColorChange = () => {
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const BrandComponent = (
    <Link to="/" style={{ textDecoration: "none" }}>
      <div>
        <Button className={classes.title}>
          <img className={classes.logo} alt="Logo" src={logo} />
          <Typography variant="h4">Zesty Market</Typography>
        </Button>
      </div>
    </Link>
  );

  return (
    <AppBar
      className={clsx({
        [classes.appBar]: true,
        [classes.transparent]: !scrolled,
        [classes.white]: scrolled,
      })}
      position="fixed"
    >
      <Toolbar className={classes.toolBar}>
        <div className={classes.flex}>{BrandComponent}</div>
        <Hidden smDown>
          <NavBarLinks />
        </Hidden>
        <Hidden mdUp>
          <IconButton aria-label="open drawer" onClick={handleDrawerToggle}>
            <Menu style={{ fill: "#9D4800" }} />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp>
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.appResponsive}>
            <NavBarLinks handleDrawerToggle={handleDrawerToggle} />
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
}
