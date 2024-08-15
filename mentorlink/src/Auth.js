import { SimpleGrid, Box, Button, AspectRatio, Grid, GridItem, HStack, Card, CardHeader, Heading, Center, Image } from '@chakra-ui/react'
import Login from './Login';
import googleimg from './google.png';
import githubimg from './github-mark.png';

function Auth (){


    return(
        <HStack    >
            <Box bg='tomato' w={{lg:"50%", md:"40%", sm:"20%"}} h={{lg:"100vh", md:"100vh", sm:"100px"}}>
                <Heading>
                    Join MentorLink
                </Heading>
                <h3>
                    Whether you're a seasoned professional looking to mentor students or a student looking for a mentor, you have a match here. Get Started on your journey here 
                </h3>
                        <Button>
                            Register
                        </Button>
            </Box>
            <Box justifyContent={'center'} alignContent={'center'}>
                <Center >
                    <Card align={'center'} variant={'elevated'}>
                        <CardHeader>
                            <Heading size='md'>
                                Login to Your Account
                            </Heading>
                        </CardHeader>
                        <Box bg='blue.200' height='30px'>
                            <Image src={googleimg} w={'70px'}/>
                           
                        </Box>
                        <Box bg='blue.200' height='30px'>
                            <Image src={githubimg}  w={'50px'}/>
                             
                        </Box>

                        <div>
                            Or sign in with your Username
                        </div>
                        
                        <Login/>
                    </Card>
                </Center>
            </Box>
            
                
            
                 
        </HStack>
        // <SimpleGrid columns={2} spacing={0} h='730px'>
        //     <Box bg='tomato'>
        //         MENTOR LINK
        //     </Box>
        //     <Box bg='' height='600px'>
        //         <Box bg='blue.200' height='30px'>
        //             sign in with google
        //         </Box>
        //         <Box bg='blue.200' height='30px'>
        //             sign in with github
        //         </Box>
        //         {/* <Box bg='blue.200' height='30px'>
        //             sign in with mail
        //         </Box> */}
        //         <Button>
        //             Register
        //         </Button>
        //         <Login/>
        //     </Box>
        // </SimpleGrid>
    );
}

export default Auth;