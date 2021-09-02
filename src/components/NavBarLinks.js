/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Link } from "gatsby";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import DiscordIcon from './DiscordIcon';

import {
  AppBar,
  Button,
  Drawer,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import logo from "../images/logo.svg";

const useStyles = makeStyles((theme) => ({
  list: {
    margin: "0 !important",
    paddingLeft: "0 !important",
    listStyle: "none !important",
    paddingTop: "0 !important",
    paddingBottom: "0 !important",
    // backgroundColor: "#fff",
    width: "100%",
    textAlign: "center !important",
  },
  listItem: {
    // float: "left !important",
    display: "inline-block !important",
    position: "relative !important",
    width: "auto !important",
    margin: "0 !important",
    padding: "0 !important",
    paddingLeft: "3rem !important",
    paddingRight: "3rem !important",
    marginLeft: "0.35rem !important",
    backgroundColor: "#f4f43",
    // Hover
    [theme.breakpoints.down("sm")]: {
      float: "right !important",
      "&:after": {
        width: "calc(100% - 30px) !important",
        content: '""',
        // display: "block !important",
        height: "1px !important",
        marginLeft: "15px !important",
        backgroundColor: "#e5e5e5 !important",
      },
    },
  },
  logo: {
    width: "1.5rem",
    marginRight: "15px",
    // paddingLeft: "3rem !important",
    // paddingRight: "0.7rem !important",
  },
  link: {
    width: "100px",
    position: "relative !important",
    padding: "0.9375rem !important",
    fontFamily: "Nunito !important",
    fontWeight: "600 !important",
    textTransform: "none !important",
    textDecoration: "none !important",
    lineHeight: "20px !important",
    margin: "0 auto !important",
    color: "#706F6E",
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px !important)",
      marginLeft: "15px !important",
      marginBottom: "8p !importantx",
      marginTop: "8px !important",
      textAlign: "left !important",
      "& > span:first-chil !importantd": {
        justifyContent: "flex-start !important",
      },
    },
  },
  title: {
    position: "relative !important",
    padding: "0.9375rem !important",
    fontFamily: "Nunito !important",
    fontWeight: "700 !important",
    fontSize: "35px",
    textTransform: "none !important",
    textDecoration: "none !important",
    lineHeight: "20px !important",
    margin: "0 !important",
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px !important)",
      marginLeft: "15px !important",
      marginBottom: "8p !importantx",
      marginTop: "8px !important",
      textAlign: "left !important",
      "& > span:first-chil !importantd": {
        justifyContent: "flex-start !important",
      },
    },
  },
}));

export default function NavBarLinks(props) {
  const classes = useStyles();
  const { handleDrawerToggle } = props;

  return (
    <>
      <CssBaseline />
      <List className={classes.list}>
        <Hidden mdUp>
          <ListItem
            className={classes.listItem}
            onClick={() => {
              handleDrawerToggle();
            }}
          >
            <IconButton
              onClick={() => {
                handleDrawerToggle();
              }}
              style={{
                height: "3rem",
              }}
            >
              <ChevronRight
                style={{
                  fill: "#9D4800",
                  lineHeight: "20px",
                }}
              />
            </IconButton>
          </ListItem>
        </Hidden>
        <ListItem className={classes.listItem}>
          <Button
            aria-label="Litepaper"
            className={classes.link}
            href="https://docs.zesty.market/litepaper"
            rel="noreferrer"
            target="_blank"
          >
            Litepaper
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            aria-label="Blog"
            className={classes.link}
            href="https://github.com/zestymarket"
            rel="noreferrer"
            target="_blank"
          >
            Blog
          </Button>
        </ListItem>
        <Hidden mdDown>
          <ListItem className={classes.listItem}>
            <Button
              aria-label="Zesty Market"
              className={classes.title}
              href="/"
              rel="noreferrer"
            >
              <img src={logo} className={classes.logo}></img>
              Zesty Market
            </Button>
          </ListItem>
        </Hidden>
        <ListItem className={classes.listItem}>
          <Button
            aria-label="Blog"
            className={classes.link}
            href="https://duneanalytics.com/limbofeather/zestymarket"
            rel="noreferrer"
            target="_blank"
          >
            Stats
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <IconButton
            style={{marginRight: 10}}
            aria-label="Twitter"
            href="https://twitter.com/zestymarket"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon/>
          </IconButton>
          <IconButton
          aria-label="Github"
          href="https://github.com/zestymarket"
          rel="noreferrer"
          target="_blank"
          >
          <GitHubIcon/>
          </IconButton>
          <IconButton
            style={{marginLeft: 10}}
            aria-label="Discord"
            href="https://discord.gg/hSXTGvAcSs"
            rel="noreferrer"
            target="_blank"
          >
            <DiscordIcon/>
          </IconButton>
        </ListItem>
        {/* <ListItem className={classes.listItem}>
          <CustomButton
            className={classes.link}
            size="small"
            color="primary"
            href="https://app.zesty.market"
            rel="noreferrer"
            target="_blank"
          >
            Launch App
          </CustomButton>
        </ListItem> */}
      </List>
    </>
  );
}
