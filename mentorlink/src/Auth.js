import { Text, Stack,Box, Button, Heading, Flex } from '@chakra-ui/react'
import Login from './Login';
import googleimg from './google.png';
import githubimg from './github-mark.png';
import  "./googleicon.css"
import {Link} from 'react-router-dom';

function Auth (){

    const LoginArea = () =>{
         return(
            <Box p={4} mx={'auto'} >
                <LoginHeader/>
                <Login/>
            </Box>
         )
    }
    const GoogleSignIn = () =>{
        return(
            <button className="gsi-material-button">
                <div className="gsi-material-button-state" />
                <div className="gsi-material-button-content-wrapper">
                    <div className="gsi-material-button-icon">
                    <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        style={{ display: "block" }}
                    >
                        <path
                        fill="#EA4335"
                        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                        />
                        <path
                        fill="#4285F4"
                        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                        />
                        <path
                        fill="#FBBC05"
                        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                        />
                        <path
                        fill="#34A853"
                        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                        />
                        <path fill="none" d="M0 0h48v48H0z" />
                    </svg>
                    </div>
                    <span className="gsi-material-button-contents">Sign in with Google</span>
                    <span style={{ display: "none" }}>Sign in with Google</span>
                </div>
            </button>
        );
    }
    const GithubSignIn = () =>{
        return(
            <button className="gsi-material-button">
                <div className="gsi-material-button-state" />
                <div className="gsi-material-button-content-wrapper">
                    <div className="gsi-material-button-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="mr-2" viewBox="0 0 1792 1792">
                        <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                    </svg>
                    </div>
                    <span className="gsi-material-button-contents">Sign in with Github</span>
                    <span style={{ display: "none" }}>Sign in with GitHub</span>
                </div>
            </button>
        );
    }
    const LoginHeader = () =>{
        return (
            <Box textAlign={'center'} align={'center'}>
                <Heading size='md'>Login To Your Account</Heading>
                <Stack w={'80%'} direction={'column'}  mx={'auto'} align={'center'} mt={4}>
                    <Box gap={4} justifyContent={'space-between'}>
                    <GoogleSignIn/>
                    <GithubSignIn/>
                    </Box>
                </Stack>
            </Box>

        );
    }
    const RegisterArea = () =>{
        return(
            <Box p={5}>
                <Heading colorScheme={'green'} p={5} size={{md:'2xl'}}>
                    Join MentorLink
                </Heading>
                <Text p={4}>
                    Whether you're a seasoned professional looking to mentor students or a student looking for a mentor, you have a match here. Start your journey here. 
                </Text>
                <Button mt={2}>
                <a href="/Register"><h2>Register</h2></a>
                </Button>
            </Box>  
            
        );
    }
    return(
        
        <Stack direction={{base:'column', md:'row'}}>
            <Flex bg='tomato' w={{lg:"45%", md:"40%", sm:"10%"}} h={{lg:"100vh", md:"100vh", sm:"100px"}} justifyContent={'center'} align={'center'}>
                <Box
                width={'70%'}
                maxWidth={'100%'}
                borderRadius={7}
                textAlign={'center'}>
                    <RegisterArea/>
                </Box>
            </Flex>
            <Flex w={{lg:"55%", md:"40%", sm:"20%"}} h={{lg:"100vh", md:"100vh", sm:"100px"}} justifyContent={'center'} align={'center'}>
                <Box borderWidth={3} 
                    px={5}
                    width={'70%'}
                    maxWidth={'100%'}
                    borderRadius={7}
                    textAlign={'center'}
                    boxShadow={'lg'}
                    my={'auto'}>
                    <LoginArea/>
                </Box>
            </Flex>
            
        </Stack>
    );


    
}

export default Auth;