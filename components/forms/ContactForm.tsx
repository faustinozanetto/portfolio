import React from 'react';
import { Box, Button, FormControl, Heading, VStack } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { FormField } from '.';
import { FormTextArea } from './FormTextArea';

interface ContactFormProps {}

export const ContactForm: React.FC<ContactFormProps> = ({}) => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
      }}
      onSubmit={() => {}}
    >
      <Form>
        <VStack align='stretch'>
          <Heading as='h2' p={4} textAlign='center'>
            Contact Me
          </Heading>
          <FormField
            name='firstName'
            label='First Name'
            placeholder='First Name'
            type='text'
            isRequired
          />
          <FormField
            name='lastName'
            label='Last Name'
            placeholder='Last Name'
            type='text'
            isRequired
          />
          <FormField
            name='email'
            label='Email'
            placeholder='email@mail.com'
            type='email'
            isRequired
          />
          <FormField
            name='subject'
            label='Subject'
            placeholder='Subject'
            type='text'
            isRequired
          />
          <FormTextArea
            name='message'
            label='Message'
            placeholder='Type your questions here.'
            type='text'
            isRequired
            w='100%'
          />
          <Box align='center'>
            <Button type='submit' colorScheme='whatsapp' w='60%'>
              Submit
            </Button>
          </Box>
        </VStack>
      </Form>
    </Formik>
  );
};
