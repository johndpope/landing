import React, { useState } from "react";
import {
  AppBar,
  Drawer,
  Hidden,
  IconButton,
  Toolbar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Menu } from "@material-ui/icons";
import clsx from "clsx";
import NavBarLinks from "./NavBarLinks";

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
    backgroundColor: "#F4EBE2",
    boxShadow: "none",
  },
  toolBar: {
    width: "100%",
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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      className={clsx({
        [classes.appBar]: true,
        // [classes.transparent]: scrolled,
        // [classes.white]: scrolled,
      })}
      position="fixed"
    >
      <Toolbar className={classes.toolBar}>
        {/* <div className={classes.flex}>{BrandComponent}</div> */}
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
