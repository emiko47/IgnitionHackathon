
import {ThemeProvider, Link, Heading, Text, theme,Checkbox,
    ColorModeProvider, CSSReset, CardBody, Flex,Stack,Button, 
    Box, IconButton, useColorMode, FormControl, FormLabel, Input} from '@chakra-ui/react'

function Change(){

const LoginArea=()=>{
    return(
      <Flex minHeight='100vh' width='full' align='center' justifyContent='center'>
        <Box
        borderWidth={1}
        px={4}
        width={'full'}
        maxWidth={'500px'}
        borderRadius={4}
        textAlign={'center'}
        boxShadow={'lg'}>
        <ThemeSelector/>
        <Box p={4}>
          <LoginHeader/>
          <LoginForm/>
        </Box>
        </Box>
      </Flex>
    )
  }
  
  const ThemeSelector = () =>{
  
    const {colorMode,toggleColorMode} = useColorMode();
    return(
      <Box textAlign={'right'} py={4}>
        <IconButton icon={colorMode === 'light' ? 'MdPhone':'sun'} onClick={toggleColorMode}
        variant={'ghost'}/>
      </Box>
        
      
    );
  }
  
  const LoginHeader = () =>{
    return(
      <Box textAlign='center'>
        <Heading>Sign In To Your Account</Heading>
        <Text>Or</Text>
        <Link>Register to get started</Link>
      </Box>
    );
  }
  const VAR_COLOR = 'teal';
  
  const LoginForm = () =>{
    return(
      <Box my={8} textAlign={'left'}>
      <form>
        <FormControl mt={4}>
          <FormLabel>Email Address</FormLabel>
          <Input type='email' placeholder='Enter your email address'/>
        
          <FormLabel>Password</FormLabel>
          <Input type='password' placeholder='Enter password'/>
          </FormControl>
          
          
          <Stack direction={'row'} justifyContent={'space-between'} mt={4}>
            <Box>
              <Checkbox> Remember Me </Checkbox>
            </Box>
            <Box>
              <Link color={VAR_COLOR}>Forgot your password?</Link>
            </Box>
          </Stack>
        <Button bgColor={`${VAR_COLOR}.300`} width='full' mt={4}>Sign In</Button>
      </form>  
      </Box>
  
      
    );
  }
}

export default Change;