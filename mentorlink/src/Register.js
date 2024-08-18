import { Box, Heading, } from "@chakra-ui/react";
import { useFormik, Formik, Form, ErrorMessage, Field } from "formik";
import { useState } from "react";
import * as Yup from 'yup';
import RegisterFormOne from "./RegisterFormOne.js"
import RegisterFormTwo from "./RegisterFormTwo.js"

function Register (){

  const [data, setData] = useState({
    firstName:'', 
    lastName: '',
    email: '',
    password: '',
    vPassword: '',
    category:'',//student or professional?
    role: '',
    education:'',//If Student, high school or uni
    school: '',//self-explanatory
    year: '',//Grade 11, 12, Year 1,2,3,4 
    major: '',
    interests: [],
    bio: '',
  });

  const [currentStep, setCurrentStep] = useState(0);

  const makeRequest = (formData) =>{
    //make api request here
  }

  const handleNext = (newData, final=false) =>{
    
    setData(prev =>({...prev,...newData}));
    if(final){
      makeRequest(newData);
      return;
    }
    setCurrentStep(prev => prev + 1)
  }
  const handlePrev = (newData) =>{
    setData(prev =>({...prev,...newData}));
    setCurrentStep(prev => prev - 1)

  }
  const steps = [
    <RegisterFormOne next={handleNext} data={data} />, 
    <RegisterFormTwo next = {handleNext} prev={handlePrev} data={data}/>   
  ]
  
  return (
      <Box 
      borderWidth={3} 
      p={5}
      width={{md:'50%', lg:'40%', base:'100%'}}
      maxWidth={'100%'}
      borderRadius={7}
      textAlign={'center'}
      boxShadow={'lg'}
      mt={ {lg:'50px', base:'25%'}}
      mx={"auto"}>
        <Heading width={'100%'} mx='auto' size='lg' pb={5}>
          Begin Your Mentorship Journey...
        </Heading>
        {steps[currentStep]}
      </Box>
      
  );
}  

export default Register;


// skills: [],
//       industry: [],
//       learningDisability:'',