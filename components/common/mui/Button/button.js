import React from "react";
import { default as MuiButton } from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";


const Button = (props) => {
  const useStyles = makeStyles(() => ({
    button: {
      backgroundColor: "#FFC400",
      // color: props.textColor || "black",
      // width: "100%",
      color: "black",
      fontWeight: 800,
      borderRadius: "10px",
      border: "1px solid black",


      transition: "all 0.5s ease-in-out",
      "&:focus": {
        outline: "none",
      },
      "&:hover": {
        backgroundColor: "black",
        color: "white",
        border: "1px solid #ffc400",
        outline: "none",

      },
      "&:disabled": {
        backgroundColor: "black",
        color: "white",
        border: "1px solid #ffc400",
        outline: "none",
        cursor: "notAllowed !important",
      },
      textTransform: "none",
    },
  }));
  const classes = useStyles();
  return (
    <MuiButton
      {...props}
      variant="contained"
      className={classes.button}
      startIcon={props.startIcon ? <props.startIcon /> : null}
      endIcon={props.endIcon ? <props.endIcon /> : null}







    >
      {props.name}
    </MuiButton>
  );
};



export default Button;

Button.propTypes = {
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  startIcon: PropTypes.elementType,
  endIcon: PropTypes.elementType,
  name: PropTypes.string.isRequired,
};
