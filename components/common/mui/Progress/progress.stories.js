import React from "react";
import Progress from "./progress";

export default {
  title: "Form/Progress",
  component: Progress,
};

const Template = (args) => <Progress {...args} />;

export const Circle = Template.bind({});
Circle.args = {
  type: "circle",
  circleColor: "green",
};

export const LinearBar = Template.bind({});
LinearBar.args = {
  primaryColor: "green",
  secondaryColor: "lightgreen",
};
