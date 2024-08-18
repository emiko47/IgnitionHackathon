import {Field, Form, Formik} from 'formik';
import {Button,FormControl,FormLabel,Input,} from '@chakra-ui/react'
import { setUserSession } from './services/AuthServices';
import { Navigate } from 'react-router-dom';


function Login(){
    return (
      
        <Formik
          initialValues={{ username: '', password:'' }}
          onSubmit={async(values) => {
            
              try {
                const response = await fetch("https://zjfr57vzyc.execute-api.us-east-2.amazonaws.com/Prod/login", {//login url is called from environment variables here
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'accept':'application/json',
                    'x-api-key': "HJB0GmoOlO2RHgn7sOvbY4CrWqDV4HU98yFeADJ8",
                  },
                  body: JSON.stringify({ ...values }),
                });
                const data = await response.json();
                console.log(data);
                if (response.ok) {
                  alert("LoggedIn Successfully")
                  setUserSession(data.user, data.token); // Save user session
                  sessionStorage.setItem('bio', data.bio);
                  sessionStorage.setItem('name', data.name);
                  sessionStorage.setItem('skills', data.skills);
                  sessionStorage.setItem('interests', data.interests);
                  sessionStorage.setItem('major', data.major);
                  sessionStorage.setItem('profileid', data.profile_id);
                  sessionStorage.setItem('role', data.role);
                  sessionStorage.setItem('school', data.school);
                  sessionStorage.setItem('img_src', data.img_src);
                  <Navigate to="/dashboard"/>
                  // setMessage('Login successful!');
                  // Optionally, redirect or update state as needed
                } else {
                  alert("LoggedIn Failed")
                  // setMessage(data.message || 'Login failed. Please check your credentials.');
                }
              }catch (e){
                console.log(e);
              }
            }
          }
        >
          {
      (props) =>(
        <Form >
          <FormControl p={4}>
            <FormLabel htmlFor="username">Username</FormLabel>
            <Field as={Input} name="username" type="text" />
          </FormControl>
          <FormControl p={4}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Field as={Input} name="password" type="password" />
          </FormControl>

          <Button
            mt={4}
            colorScheme='teal'
            isLoading={props.isSubmitting}
            type='submit'
          >
            Sign In
          </Button>
          </Form>
        )}
        </Formik>
    )
}   

export default Login;