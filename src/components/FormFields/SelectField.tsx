import {
  FormControl,
  FormHelperText,
  MenuItem,
  SelectProps,
} from '@mui/material';
import { SelectHTMLAttributes } from 'react';
import { Control, useController } from 'react-hook-form';
import { StyledSelect } from './styles';

export interface SelectOption extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  value: number | string;
}

export interface SelectFieldProps extends SelectProps {
  name: string;
  control: Control<any>;
  options: SelectOption[];
}

export const SelectField = ({
  name,
  control,
  options,
  ...props
}: SelectFieldProps) => {
  const {
    field: { value, onChange, onBlur },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });

  return (
    <FormControl error={invalid} fullWidth size="small">
      <StyledSelect
        {...props}
        value={value}
        onChange={onChange}
        onBlur={onBlur}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </StyledSelect>

      <FormHelperText>{error?.message}</FormHelperText>
    </FormControl>
  );
};
