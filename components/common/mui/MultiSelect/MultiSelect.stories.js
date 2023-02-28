import React from "react";
import MultiSelect from "./multiSelect";

export default {
  title: "Form/MultiSelect",
  component: MultiSelect,
};

const Template = (args) => <MultiSelect {...args} />;

export const MultiSelectWithCheckbox = Template.bind({});
MultiSelectWithCheckbox.args = {
  width: 250,
  options: [
    { title: "The Shawshank Redemption", year: "1994" },
    { title: "The Godfather", year: "1972" },
    { title: "The Godfather: Part II", year: "1974" },
    { title: "The Dark Knight", year: "2008" },
    { title: "12 Angry Men", year: "1957" },
  ],
  limitTags: 2,
  label: "Movies",
  placeholder: "Favorites",
};
