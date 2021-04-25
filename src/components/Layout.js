import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import NavBar from "./NavBar";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    marginTop: theme.spacing(10),
    margin: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(9),
      margin: 0,
    },
  },
}));

export default function Layout(props) {
  const classes = useStyles();

  return (
    <div>
      <NavBar />
      <main className={clsx(classes.content)}>
        {props.children}
      </main>
    </div>
  );
}
