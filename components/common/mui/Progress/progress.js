import React from "react";
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { CircularProgress, LinearProgress } from "@material-ui/core";

const Progress = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      "& > * + *": {
        marginLeft: theme.spacing(2),
      },
      "& .MuiLinearProgress-root": {
        width: "100%",
      },
      "& .MuiLinearProgress-colorPrimary": {
        backgroundColor: props.primaryColor || "blue",
      },
      "& .MuiLinearProgress-barColorPrimary": {
        backgroundColor: props.secondaryColor || "blue",
      },
      "& .MuiCircularProgress-circle": {
        stroke: props.circleColor || "red",
      },
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {props.type === "circle" ? <CircularProgress /> : <LinearProgress />}
    </div>
  );
};

export default Progress;

Progress.propTypes = {
  type: PropTypes.string,
  circleColor: PropTypes.string,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
};
