import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import { default as MuiSelect } from "@material-ui/core/Select";
import PropTypes from "prop-types";

const Select = (props) => {
  const { data, value, onChange } = props;
  return (
    <MuiSelect {...props} value={value} onChange={onChange} displayEmpty>
      {data.map((value) => (
        <MenuItem key={value.id} value={value.value}>
          {value.label}
        </MenuItem>
      ))}
    </MuiSelect>
  );
};

export default Select;

Select.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string.isRequired,
};
