import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Controller, useFormContext } from "react-hook-form";
import {
  Checkbox,
  FormControlLabel,
  FormControl,
  FormHelperText,
  FormLabel,
  FormGroup,
} from "@material-ui/core";

import { isStringIncludedInArray } from "./ControlledCheckBox.utils";

const ControlledCheckBox = ({ name, label, options = [] }) => {
  const { control, errors, watch } = useFormContext();
  const error = errors[name];
  const currentValues = watch(name);
  const isInCurrentValues = isStringIncludedInArray(currentValues);

  const renderOptions = useMemo(
    () =>
      options?.map((option, index) => (
        <FormControlLabel
          key={`${name}[${index}]`}
          label={option.label}
          control={
            <Controller
              name={`${name}[${index}]`}
              control={control}
              render={({ onChange, name }) => (
                <Checkbox
                  name={`${name}[${index}]`}
                  value={`${name}[${option.value}]`}
                  checked={isInCurrentValues(option.value)}
                  onChange={(e) => {
                    e.target.checked ? onChange(option.value) : onChange();
                  }}
                />
              )}
            />
          }
        />
      )),
    [control, isInCurrentValues, name, options]
  );

  return (
    <FormControl component="fieldset" error={!!error}>
      <FormLabel component="legend">{label}</FormLabel>
      <FormGroup>{renderOptions}</FormGroup>
      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  );
};

ControlledCheckBox.propTypes = {
  group: PropTypes.shape({
    key: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
  }),
  name: PropTypes.string,
};

ControlledCheckBox.defaultProps = {
  group: {
    key: "",
    options: [],
  },
  name: "",
};

export default ControlledCheckBox;
