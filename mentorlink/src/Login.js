import {Field, Form, Formik} from 'formik';
import {Button,FormControl,FormLabel,Input,FormErrorMessage} from '@chakra-ui/react'

function Login(){

    function validateName (){
        
    }


    return (
        <Formik
          initialValues={{ name: 'Sasuke' }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              actions.setSubmitting(false)
            }, 1000)
          }}
        >
          {(props) => (
            <Form>
              <Field name='name' validate={validateName}>
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.name && form.touched.name}>
                    <FormLabel>Username</FormLabel>
                    <Input {...field} placeholder='name' />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
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