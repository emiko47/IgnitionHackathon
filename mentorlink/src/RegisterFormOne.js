import { Box, FormControl, FormLabel, Input, Button, Stepper, Progress, Step,StepIcon, StepIndicator, StepStatus,useSteps } from "@chakra-ui/react";
import { useFormik, Formik, Form, ErrorMessage, Field } from "formik";
import { useState } from "react";
import * as Yup from 'yup';

function RegisterFormOne(props){
    return(
    <Formik
    initialValues={props.data}
    
    validationSchema={Yup.object({
      firstName : Yup.string().required('Required'),
      lastName : Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
      vPassword: Yup.string().test('passwords-match', 'Passwords must match', function(value){
        return this.parent.password === value
      }),
    })}
    onSubmit={(values, setSubmitting) =>{
      props.next(values)
    }}>

    {
      (props) =>(
        <Form >
          <FormControl p={4}>
            <FormLabel htmlFor="fName">First Name</FormLabel>
            <Field as={Input} name="firstName" type="text" />
            <ErrorMessage name="firstName" />
          </FormControl>
          <FormControl p={4}>
            <FormLabel htmlFor="lName">Last Name</FormLabel>
            <Field as={Input} name="lastName" type="text" />
            <ErrorMessage name="lastName" />
          </FormControl>
          <FormControl p={4}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Field as={Input} name="email" type="email" />
            <ErrorMessage name="email" />
          </FormControl>
          <FormControl p={4}>
            <FormLabel htmlFor="username">Username</FormLabel>
            <Field as={Input} name="username" type="text" />
            <ErrorMessage name="username" />
          </FormControl>
          <FormControl p={4}>
            <FormLabel htmlFor="password">Enter Password</FormLabel>
            <Field as={Input} name="password" type="password" />
            <ErrorMessage name="password" />
          </FormControl>
          <FormControl p={4}>
            <FormLabel htmlFor="vPassword">Confirm Password</FormLabel>
            <Field as={Input} name="vPassword" type="password" />
            <ErrorMessage name="vPassword" />
          </FormControl>
          <Button
            mt={4}
            colorScheme='teal'
            isLoading={props.isSubmitting}
            type='submit'
          >
            Get Started
          </Button>
        </Form>
      )
      
    }
  
    </Formik>
    );
} 

export default RegisterFormOne;