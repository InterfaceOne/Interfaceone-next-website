import React from "react";
import { AiFillAndroid } from "react-icons/ai";

import JsonFormCreator from "./jsonFormCreator";

const JsonForm = () => {
  const selectValues = [
    {
      id: Math.random() + 1,
      value: "10",
      label: "Ten",
    },
    {
      id: Math.random() + 1,
      value: "20",
      label: "Twenty",
    },
    {
      id: Math.random() + 1,
      value: "30",
      label: "Thirty",
    },
  ];

  const top100Films = [
    { value: "The Shawshank Redemption", label: "The Shawshank Redemption" },
    { value: "The Godfather", label: "The Godfather" },
    { value: "The Godfather: Part II", label: "The Godfather: Part II" },
    { value: "The Dark Knight", label: "The Dark Knight" },
    { value: "12 Angry Men", label: "12 Angry Men" },
  ];

  const RadioButtons = [
    {
      id: 1,
      name: "radio1",
      label: "Radio1",
    },
    {
      id: 2,
      name: "radio2",
      label: "Radio2",
    },
    {
      id: 3,
      name: "radio3",
      label: "Radio3",
    },
  ];

  const layout = [
    {
      rowId: 1,
      columns: ["firstName", "lastName", "password", "customSwitch"],
    },
    {
      rowId: 2,
      columns: ["agree", "radioGroup", "toggle"],
    },
    {
      rowId: 3,
      columns: ["age", "movies", "fileUpload"],
    },
    {
      rowId: 4,
      columns: ["submit"],
    },
  ];

  const schema = {
    firstName: {
      id: "firstName",
      fieldProps: {
        type: "text",
        name: "firstName",
        label: "First Name",
      },
      required: {
        message: "Enter FirstName",
      },
    },
    lastName: {
      id: "lastName",
      fieldProps: {
        type: "text",
        name: "lastName",
        label: "Last Name",
      },
      required: {
        message: "Enter LastName",
      },
    },
    password: {
      id: "password",
      fieldProps: {
        type: "password",
        name: "password",
        label: "Password",
      },
      required: {
        message: "Enter Password",
      },
    },

    agree: {
      id: "checkbox",
      fieldProps: {
        type: "checkbox",
        label: "Agree",
        name: "agree",
        uncheckedColor: "red",
        checkedColor: "orange",
      },
      required: {
        message: "You need to Agree",
        mustBe: true,
      },
    },

    age: {
      id: "select",
      fieldProps: {
        type: "select",
        placeholder: "Age",
        name: "age",
        options: selectValues,
        label: "Age",
        InputLabelProps: { shrink: true },
      },
      required: {
        message: "Select age",
      },
    },

    movies: {
      id: "MultiSelect",
      fieldProps: {
        type: "multiSelect",
        label: "Movies",
        placeholder: "Favorites",
        limitTags: 2,
        options: top100Films,
        name: "movies",
      },
    },

    submit: {
      id: "submit",
      fieldProps: {
        name: "submit",
        type: "sumbit",
        bgColor: "#eee",
        textColor: "orange",
        endIcon: AiFillAndroid,
      },
    },
    radioButton: {
      id: "radioButton",
      fieldProps: {
        type: "radioButton",
        options: RadioButtons,
        title: "Radio demo",
        name: "radioGroup",
        unCheckedColor: "red",
        checkedColor: "green",
        direction: "row",
      },
      required: {
        message: "Select atleat one option",
      },
    },
    upload: {
      id: "fileUpload",
      fieldProps: {
        type: "fileUpload",
        buttonName: "Upload",
        buttonColor: "orange",
        textColor: "white",
        title: "Please upload files here",
        name: "fileUpload",
      },
      required: {
        message: "Please Upload File",
      },
    },
    toggle: {
      id: "toggle",
      fieldProps: {
        type: "switch",
        name: "toggle",
        label: "Toggle",
      },
    },
    customSwitch: {
      id: "customSwitch",
      fieldProps: {
        type: "customSwitch",
        name: "customSwitch",
        label: "Custom Switch",
        left: "OFF",
        right: "ON",
        bgColor: "pink",
        thumbLeftBgColor: "red",
        thumbRightBgColor: "green",
        thumbLeftTextColor: "pink",
        thumbRightTextColor: "lightgreen",
      },
    },
  };
  const onSubmit = (data) => {};
  return (
    <JsonFormCreator schema={schema} layout={layout} onSubmit={onSubmit} />
  );
};

export default JsonForm;
