import React from "react";
import PropTypes from "prop-types";
import { Controller, useFormContext } from "react-hook-form";
import {
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
  FormControl,
  FormHelperText,
} from "@material-ui/core";

const ControlledRadioGroup = ({ defaultValue, name, label, options = [] }) => {
  const { control, errors } = useFormContext();
  const error = errors[name];

  return (
    <FormControl error={!!error}>
      {label && <FormLabel>{label}</FormLabel>}
      <Controller
        name={name}
        control={control}
        defaultValue={false}
        render={({ onChange, value = "", name }) => (
          <RadioGroup
            key={name}
            name={name}
            defaultValue={defaultValue}
            value={value}
            onChange={onChange}
          >
            {options?.map(({ ...props }) => (
              <FormControlLabel
                key={props.name}
                control={<Radio />}
                {...props}
              />
            ))}
          </RadioGroup>
        )}
      />
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  );
};

ControlledRadioGroup.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.string,
};

ControlledRadioGroup.defaultProps = {
  options: [],
};

export default ControlledRadioGroup;
