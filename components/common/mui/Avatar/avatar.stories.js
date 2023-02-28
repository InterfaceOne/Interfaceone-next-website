import React from "react";
import { default as Avatar } from "./avatar";

export default {
  title: "Form/Avatar",
  component: Avatar,
};

const Template = (args) => <Avatar {...args} />;

export const AvatarWithPic = Template.bind({});

AvatarWithPic.args = {
  img: "//unsplash.it/50/50",
  fallback: "R",
  color: "red",
  bgColor: "black",
  variant: "rounded",
  width: 10,
  height: 10,
};

export const AvatarWithOutPic = Template.bind({});

AvatarWithOutPic.args = {
  fallback: "R",
  color: "red",
  bgColor: "black",
  variant: "rounded",
  width: 10,
  height: 10,
};
