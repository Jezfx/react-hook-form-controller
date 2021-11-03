import React from "react";
import { Controller } from "react-hook-form";
import { TextField, FormControl, FormLabel } from "@material-ui/core";

import { useFormContext } from "react-hook-form";

const ControlledTextField = ({
  name,
  label,
  defaultValue,
  helperText,
  ...rest
}) => {
  const { control, errors } = useFormContext();
  const error = errors[name];

  return (
    <FormControl hiddenLabel={true} margin="none" error={!!error}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ onChange, value = "", name }) => (
          <TextField
            error={!!error}
            name={name}
            value={value}
            onChange={onChange}
            variant="outlined"
            helperText={error?.message || helperText}
            {...rest}
          />
        )}
      />
    </FormControl>
  );
};

export default ControlledTextField;
