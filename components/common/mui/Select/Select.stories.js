import React from "react";
import Select from "./select";

export default {
  title: "Form/Select",
  component: Select,
};

const Templete = (args) => <Select {...args} />;

export const SingleSelect = Templete.bind({});
SingleSelect.args = {
  placeholder: "Choose",
  data: [
    {
      id: 1,
      value: "10",
      label: "Ten",
    },
    {
      id: 2,
      value: "20",
      label: "Twenty",
    },
  ],
  value: "10",
  fullWidth: false,
  label: "Age",
};
