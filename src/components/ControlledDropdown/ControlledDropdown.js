import React from "react";
import PropTypes from "prop-types";
import { TextField, FormLabel, FormControl } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const ControlledDropdown = ({ label, options = [], name }) => {
  const { control, errors } = useFormContext();

  const error = errors[name];

  return (
    <FormControl>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Controller
        id={name}
        name={name}
        defaultValue={false}
        control={control}
        render={({ onChange, value = "", name }) => (
          <TextField
            select
            onChange={onChange}
            value={value || ""}
            name={name}
            error={!!error}
            helperText={error ? error.message : null}
            SelectProps={{
              native: true,
              inputProps: {
                name: name,
              },
            }}
          >
            {options?.map(({ label, ...rest }, index) => (
              <option key={index} {...rest}>
                {label}
              </option>
            ))}
          </TextField>
        )}
      />
    </FormControl>
  );
};

ControlledDropdown.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

ControlledDropdown.defaultProps = {
  options: [],
};

export default ControlledDropdown;
