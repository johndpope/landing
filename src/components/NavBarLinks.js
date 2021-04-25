/*eslint-disable*/
import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import CustomButton from "./Button";


const useStyles = makeStyles((theme) => ({
  list: {
    margin: 0,
    paddingLeft: "0",
    listStyle: "none",
    paddingTop: "0",
    paddingBottom: "0",
  },
  listItem: {
    float: "left",
    position: "relative",
    display: "block",
    width: "auto",
    margin: "0",
    padding: "0",
    paddingLeft: "0.3rem",
    paddingRight: "0.3rem",
    marginLeft: "0.35rem",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      float: "right",
      "&:after": {
        width: "calc(100% - 30px)",
        content: '""',
        display: "block",
        height: "1px",
        marginLeft: "15px",
        backgroundColor: "#e5e5e5"
      }
    }
  },
  link: {
    position: "relative",
    padding: "0.9375rem",
    fontFamily: "Nunito",
    fontWeight: "700",
    textTransform: "none",
    textDecoration: "none",
    lineHeight: "20px",
    margin: "0",
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start"
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
          >
            <ChevronRight style={{ fill: "#9D4800" }} />
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
      {/* Dropdown when Community expands*/}
      {/* <ListItem className={classes.listItem}>
        <Button 
          aria-label="Community"
          className={classes.link} 
          endIcon={<ArrowDropDown />}
        >
          Community
        </Button>
      </ListItem> */}
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
          size="small" 
          color="primary" 
          className={classes.link}
          href="https://app.zesty.market"
          rel="noreferrer"
          target="_blank"
        >
          Launch App
        </CustomButton>
      </ListItem>
    </List>
  );
}
