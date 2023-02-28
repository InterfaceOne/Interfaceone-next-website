import React from "react";
import { default as Dialog } from "./model";
import * as S from "../../../containers/form/form.styles";
import { Button } from "..";
export default {
  title: "Model/Model",
  component: Dialog,
};

export const SimpleModel = () => {
  const [openModel, setOpenModel] = React.useState(false);

  const handleModelOpen = () => {
    setOpenModel(true);
  };

  const handleModelClose = () => {
    setOpenModel(false);
  };

  return (
    <Dialog
      handleOpen={handleModelOpen}
      handleClose={handleModelClose}
      isOpen={openModel}
      title="Model title"
      buttonName="Open"
    >
      <h2>Text in a modal</h2>
      <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
      <S.ModelFooter>
        <Button
          onClick={handleModelClose}
          variant="outlined"
          bgColor="white"
          textColor="blue"
        >
          Agree
        </Button>
        <Button
          onClick={handleModelClose}
          variant="outlined"
          bgColor="white"
          textColor="blue"
        >
          Cancel
        </Button>
      </S.ModelFooter>
    </Dialog>
  );
};
