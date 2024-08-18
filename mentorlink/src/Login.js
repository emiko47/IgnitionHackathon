import {Field, Form, Formik} from 'formik';
import {Button,FormControl,FormLabel,Input,} from '@chakra-ui/react'

function Login(){


    return (
      
        <Formik
          initialValues={{ username: '', password:'' }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              actions.setSubmitting(false)
            }, 1000)
          }}
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