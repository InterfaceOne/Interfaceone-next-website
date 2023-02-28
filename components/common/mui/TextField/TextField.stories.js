import React from "react";
import TextField from "./TextField";
import { AiFillAndroid } from "react-icons/ai";
export default {
  title: "Form/TextField",
  component: TextField,
};

const Template = (args) => <TextField {...args} />;

export const Text = Template.bind({});
Text.args = {
  label: "First Name",
  name: "firstName",
  type: "text",
  icon: <AiFillAndroid />,
  iconPosition: "start",
};

export const Password = Template.bind({});
Password.args = {
  label: "Password",
  name: "password",
  type: "password",
};

export const Date = Template.bind({});
Date.args = {
  label: "DOB",
  name: "dob",
  type: "date",
  InputLabelProps: {
    shrink: true,
  },
};
