import React from "react";
import { makeStyles } from "@material-ui/styles";
import Modal from "@material-ui/core/Modal";
import { GrClose } from "react-icons/gr";
import PropTypes from "prop-types";
import { Button } from "../";
import * as S from "./model.styles";
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 700,
    height: "auto",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: "none",
    borderRadius: "5px",
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  return (
    <div>
      <Button onClick={props.handleOpen} bgColor="lightblue">
        {props.buttonName}
      </Button>
      <Modal
        open={props.isOpen}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <S.Header>
            <S.Title>{props.title}</S.Title>
            <S.IconWrapper onClick={props.handleClose}>
              <GrClose />
            </S.IconWrapper>
          </S.Header>

          {props.children}
        </div>
      </Modal>
    </div>
  );
}

SimpleModal.propTypes = {
  handleOpen: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
};
