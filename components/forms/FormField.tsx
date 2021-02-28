import React, { InputHTMLAttributes } from 'react';
import {
  Box,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputProps,
} from '@chakra-ui/react';
import { useField } from 'formik';

type FormFieldProps = InputProps &
  InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    name: string;
    helperText?: string;
    isRequired?: boolean;
  };

export const FormField: React.FC<FormFieldProps> = ({
  label,
  isRequired,
  helperText,
  ...props
}) => {
  const [field, { error }] = useField(props);

  return (
    <Box mb={4}>
      <FormControl isInvalid={!!error} isRequired={isRequired}>
        <FormLabel htmlFor={field.name}>{label}</FormLabel>
        <Input {...field} {...props} id={field.name} />
        {helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
        {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
      </FormControl>
    </Box>
  );
};
