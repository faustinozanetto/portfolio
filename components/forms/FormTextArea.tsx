import React, { InputHTMLAttributes, useState } from 'react';
import {
  Box,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  InputProps,
  Textarea,
} from '@chakra-ui/react';
import { useField } from 'formik';

type FormTextAreaProps = InputProps &
  InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    name: string;
    helperText?: string;
    isRequired?: boolean;
  };

export const FormTextArea: React.FC<FormTextAreaProps> = ({
  label,
  isRequired,
  helperText,
  ...props
}) => {
  const [field, { error }] = useField(props);
  let [value, setValue] = useState('');

  let handleInputChange = (e: any) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  return (
    <Box mb={4}>
      <FormControl isInvalid={!!error} isRequired={isRequired}>
        <FormLabel htmlFor={field.name}>{label}</FormLabel>
        <Textarea
          id={field.name}
          value={value}
          onChange={handleInputChange}
          placeholder={props.placeholder}
          resize='none'
        />
        {helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
        {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
      </FormControl>
    </Box>
  );
};
