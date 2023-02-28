import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import PropTypes from "prop-types";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
// const find = (arrays, value) => {
//   return !!arrays.find((x) => x.label === value);
// };
const MultiSelect = (props) => {
  return (
    <Autocomplete
      multiple
      limitTags={props.limitTags || 3}
      id="checkboxes-tags-demo"
      options={props.options}
      disableCloseOnSelect
      getOptionLabel={(option) => option.label}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
            // checked={selected}
          />
          {option.label}
        </React.Fragment>
      )}
      style={{ width: props.width || "100%" }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label={props.label}
          inputProps={{
            ...params.inputProps,
          }}
          error={props.error}
          placeholder={props.placeholder || "Choose"}
        />
      )}
      {...props}
    />
  );
};

export default MultiSelect;

MultiSelect.propTypes = {
  options: PropTypes.array.isRequired,
  width: PropTypes.number,
  limitTags: PropTypes.number,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.bool,
};
