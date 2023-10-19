import { Checkbox, FormControlLabel, TextField, TextFieldProps } from "@mui/material";
import React, { ChangeEvent } from "react";
import { Control, FieldValues, Path, useController } from "react-hook-form";

export type InputFieldProps<T extends FieldValues> = TextFieldProps & {
  name: Path<T>;
  control: Control<T>;
};

export function CheckboxField<T extends FieldValues>({
  name,
  control,
  onChange: externalOnChange,
  onBlur: externalOnBlur,
  ref: externalRef,
  value: externalValue,
  label,
  ...rest
}: any) {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  // render whatever you want: MUI, Ant Design, Bootstrap, Custom UI
  return (
    // <TextField
    //   fullWidth
    //   size="small"
    //   margin="normal"
    //   name={name}
    //   value={value}
    //   onChange={(event: ChangeEvent<HTMLInputElement>) => {
    //     onChange(event);
    //     externalOnChange?.(event);
    //   }}
    //   // onBlur={onBlur}
    //   // error={!!error}
    //   // helperText={error?.message}
    //   inputRef={ref}
    //   {...rest}
    // />
    <FormControlLabel
      control={
        <Checkbox
          name={name}
          inputRef={ref}
          {...rest}
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
        />
      }
      label={label}
    />
  );
}
