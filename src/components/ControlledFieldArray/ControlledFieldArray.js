import React from "react";
import { Controller } from "react-hook-form";
import {
  TextField,
  Button,
  ButtonGroup,
  Box,
  FormControl,
} from "@material-ui/core";

import { useFormContext, useFieldArray } from "react-hook-form";

const ControlledFieldArray = ({ name, label }) => {
  const { control, errors } = useFormContext();
  const { fields = [], append, remove } = useFieldArray({
    control,
    name,
  });

  const error = errors[name];

  const appendField = () => {
    append({
      value: "",
    });
  };

  const removeField = () => {
    remove(-1);
  };

  const showRemoveButton = !!fields?.length;

  const getError = (index) =>
    error && error[index] && error[index]?.value?.message;

  const helperText = (index, field) => getError(index) || field?.helperText;

  return (
    <FormControl component="fieldset" error={!!error}>
      {fields.map((field, index) => (
        <Controller
          key={field.id}
          name={`${name}[${index}].value`}
          control={control}
          defaultValue={field.value}
          render={(
            { onChange, onBlur, value, name, ref },
            { invalid, isTouched, isDirty }
          ) => (
            <TextField
              label={label}
              name={name}
              variant="filled"
              value={value || ""}
              onChange={onChange}
              error={error && !!error[index]}
              helperText={helperText(index, field)}
            />
          )}
        />
      ))}
      <Box>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button onClick={appendField}>Add</Button>
          {showRemoveButton && <Button onClick={removeField}>Remove</Button>}
        </ButtonGroup>
      </Box>
    </FormControl>
  );
};

export default ControlledFieldArray;
