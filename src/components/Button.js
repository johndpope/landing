import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import clsx from "clsx";

const useStyles = makeStyles({
  button: {
    fontFamily: "Nunito",
    fontWeight: "700",
    minHeight: "auto",
    minWidth: "auto",
    color: "#FFF",
    fontSize: "15px",
    letterSpacing: "0",
    padding: "10px 15px",
    margin: "1rem 20px",
    textTransform: "none",
    borderRadius: "4px",
    // transition:
    //   "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
  },
  primary: {
    backgroundColor: "#FF7500",
    boxShadow:
      "0 2px 2px 0 rgba(229, 105, 0, 0.14), 0 3px 1px -2px rgba(229, 105, 0, 0.2), 0 1px 5px 0 rgba(229, 105, 0, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: "#ffac66",
      boxShadow:
        "0 14px 26px -12px rgba(209, 105, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(229, 105, 0, 0.2)",
    },
  },
  secondary: {
    backgroundColor: "#161B23",

    boxShadow:
      "0 2px 2px 0 rgba(103, 154, 253, 0.14), 0 3px 1px -2px rgba(103, 154, 253, 0.2), 0 1px 5px 0 rgba(103, 154, 253, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: "#313d4f",
      boxShadow:
        "0 14px 26px -12px rgba(103, 154, 253, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(103, 154, 253, 0.2)",
    },
  },

  tertiary: {
    backgroundColor: "#00A3FF",

    boxShadow:
      "0 2px 2px 0 rgba(103, 154, 253, 0.14), 0 3px 1px -2px rgba(103, 154, 253, 0.2), 0 1px 5px 0 rgba(103, 154, 253, 0.12)",
    "&:hover,&:focus": {
      backgroundColor: "#63c7ff",
      boxShadow:
        "0 14px 26px -12px rgba(103, 154, 253, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(103, 154, 253, 0.2)",
    },
  },
});

const CustomButton = React.forwardRef((props, ref) => {
  const { color, children, className, ...rest } = props;

  const classes = useStyles();

  return (
    <Button
      {...rest}
      ref={ref}
      className={clsx({
        [classes.button]: true,
        [classes[color]]: color,
        [className]: className,
      })}
    >
      {children}
    </Button>
  );
});

CustomButton.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary"]),
  children: PropTypes.node,
  className: PropTypes.string,
};

export default CustomButton;
