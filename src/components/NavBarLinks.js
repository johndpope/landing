/*eslint-disable*/
import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import CustomButton from "./Button";


const useStyles = makeStyles((theme) => ({
  list: {
    margin: "0 !important",
    paddingLeft: "0 !important",
    listStyle: "none !important",
    paddingTop: "0 !important",
    paddingBottom: "0 !important",
  },
  listItem: {
    float: "left !important",
    position: "relative !important",
    display: "block !important",
    width: "auto !important",
    margin: "0 !important",
    padding: "0 !important",
    paddingLeft: "0.3rem !important",
    paddingRight: "0.3rem !important",
    marginLeft: "0.35rem !important",
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
      float: "right !important",
      "&:after": {
        width: "calc(100% - 30px) !important",
        content: '""',
        display: "block !important",
        height: "1px !important",
        marginLeft: "15px !important",
        backgroundColor: "#e5e5e5 !important"
      }
    }
  },
  link: {
    position: "relative !important",
    padding: "0.9375rem !important",
    fontFamily: "Nunito !important",
    fontWeight: "700 !important",
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
        justifyContent: "flex-start !important"
      },
    },
  },
}));

export default function NavBarLinks(props) {
  const classes = useStyles();
  const {
    handleDrawerToggle,
  } = props;

  return (
    <>
      <CssBaseline />
      <List className={classes.list}>
        <Hidden mdUp>
          <ListItem 
            className={classes.listItem}
            onClick={() => {
              handleDrawerToggle()
            }}
          >
            <IconButton 
              onClick={() => {
                handleDrawerToggle()
              }}
              style={{
                height: "3rem",
              }}
            >
              <ChevronRight style={{ 
                fill: "#9D4800",
                lineHeight: "20px"
              }} />
            </IconButton>
          </ListItem>
        </Hidden>
        <ListItem className={classes.listItem}>
          <Button 
            aria-label="Litepaper"
            className={classes.link}
            href="https://docs.zesty.market/"
            rel="noreferrer"
            target="_blank"
          >
            Litepaper
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button 
            aria-label="Discord" 
            className={classes.link}
            href="https://discord.gg/hSXTGvAcSs"
            rel="noreferrer"
            target="_blank"
          >
            Discord
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button 
            aria-label="Twitter" 
            className={classes.link}
            href="https://twitter.com/zestymarket"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button 
            aria-label="Github" 
            className={classes.link}
            href="https://github.com/zestymarket"
            rel="noreferrer"
            target="_blank"
          >
            Github
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
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
        </ListItem>
      </List>
    </>
  );
}
