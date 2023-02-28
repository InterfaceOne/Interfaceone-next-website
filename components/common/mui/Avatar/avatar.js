import React from "react";
import { makeStyles } from "@material-ui/styles";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";

export default function SimpleAvatar(props) {
  const useStyles = makeStyles((theme) => ({
    orange: {
      color: props.color,
      backgroundColor: props.bgColor,
      width: theme.spacing(props.width),
      height: theme.spacing(props.height),
    },
  }));

  const classes = useStyles();

  return (
    <Avatar
      variant={props.variant}
      alt="avatarPic"
      src={props.img}
      className={classes.orange}
    >
      {props.fallback}
    </Avatar>
  );
}

SimpleAvatar.propType = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  img: PropTypes.string,
  fallback: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  variant: PropTypes.string,
};
