import React from "react";
import { IconButton, InputAdornment, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import * as S from "./TextField.style";

import { default as TextBox } from "@material-ui/core/TextField";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%",
    },
    "& .MuiButtonBase-root.MuiIconButton-root:focus": {
      outline: "none",
    },
    "& .MuiInputBase-input": {
      color: "#FFC400",
      marginBottom: "5%",
      // backgroundColor: "red",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#ffc400",
      marginBottom: "5%",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "#ffc400",
      marginBottom: "5%",
    },
    "& .Mui-error": {
      "&.MuiInput-underline:after": {
        borderBottomColor: "red",
        marginBottom: "5%",
        fontSize: "30px",
      },
      "&.MuiInput-underline:before": {
        borderBottomColor: "red",
        marginBottom: "5%",
        fontSize: "30px",
      },
    },
    "&:hover fieldset": {
      borderColor: "#ffc400",
    },
    "& label.Mui-focused": {
      color: "gray",
    },
    "& label": {
      color: "white",
    },
    "&:hover": {
      backgroundColor: "black",
    },
  },
}));

const TextField = (props) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ showPassword: !values.showPassword });
  };

  return (
    <S.TextFieldContainer>
      <TextBox
        {...props}
        fullWidth
        label={props.label}
        name={props.name}
        classes={props.classes ? props.classes : classes}
        type={
          props.type === "password" || props.type === "confirmPassword"
            ? values.showPassword
              ? "text"
              : "password"
            : props.type
        }
        InputProps={
          props.iconPosition === "start"
            ? {
                startAdornment:
                  props.type === "password" ||
                  props.type === "confirmPassword" ? (
                    <InputAdornment position="start">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        classes={classes.root}
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ) : props.icon ? (
                    <InputAdornment position="start">
                      {props.icon}
                    </InputAdornment>
                  ) : null,
              }
            : {
                endAdornment:
                  props.type === "password" ||
                  props.type === "confirmPassword" ? (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        classes={classes.root}
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ) : props.icon ? (
                    <InputAdornment position="end">{props.icon}</InputAdornment>
                  ) : null,
              }
        }
      />
    </S.TextFieldContainer>
  );
};

export default TextField;

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  iconPosition: PropTypes.string,
};
