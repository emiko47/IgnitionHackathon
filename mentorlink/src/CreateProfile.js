import { Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useFormik, Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from 'yup';


function CreateProfile(){

    return(
        <Box 
        borderWidth={3} 
        p={5}
        width={{md:'70%', lg:'50%', base:'100%'}}
        maxWidth={'100%'}
        borderRadius={7}
        textAlign={'center'}
        boxShadow={'lg'}
        mt={ {lg:'50px', base:'25%'}}
        mx={"auto"}>

        <Formik
        initialValues={{
          firstName:'', 
          lastName: '',
          email: '',
          password: '',
          vPassword: '',
          occupation:'',//student or professional?
          isMentor: false,
          Education:'',//If Student, high school or uni
          School: '',//self-explanatory
          Year: '',//Grade 11, 12, Year 1,2,3,4 
          Major: '',
          interests: [],
        }}
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
          setTimeout(()=>{
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false);
          }, 400);
        }}>

        {
          (props) =>(
            <Form >
              <FormControl >
                <FormLabel htmlFor="fName">First Name</FormLabel>
                <Field as={Input} name="firstName" type="text" />
                <ErrorMessage name="firstName" />
              </FormControl>
              <FormControl >
                <FormLabel htmlFor="lName">Last Name</FormLabel>
                <Field as={Input} name="lastName" type="text" />
                <ErrorMessage name="lastName" />
              </FormControl>
              <FormControl >
                <FormLabel htmlFor="email">Email</FormLabel>
                <Field as={Input} name="email" type="email" />
                <ErrorMessage name="email" />
              </FormControl>
              <FormControl >
                <FormLabel htmlFor="password">Create Password</FormLabel>
                <Field as={Input} name="password" type="password" />
                <ErrorMessage name="password" />
              </FormControl>
              <FormControl >
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
      </Box>
    );  

}


export default CreateProfile;


//high school? uni?
//Major
//skills: [],
//industry: [],
//learningDisability:'',
//Mentor or Mentee?
//