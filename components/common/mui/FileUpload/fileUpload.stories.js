import React from "react";
import FileUpload from "./fileUpload";

export default {
  title: "Form/FileUpload",
  component: FileUpload,
};

const Template = (args) => <FileUpload {...args} />;

export const UploadFile = Template.bind({});
UploadFile.args = {
  buttonName: "Upload",
  buttonColor: "pink",
  textColor: "green",
  title: "File Upload",
  maxSize: 100,
};
