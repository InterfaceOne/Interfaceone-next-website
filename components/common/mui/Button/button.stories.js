import React from "react";
import { AiFillAndroid } from "react-icons/ai";
import { default as MuiButton } from "./button";

export default {
  title: "Form/Button",
  component: MuiButton,
};

const Template = (args) => <MuiButton {...args}>text</MuiButton>;

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
  bgColor: "orange",
  textColor: "black",
  startIcon: AiFillAndroid,
  endIcon: AiFillAndroid,
};
