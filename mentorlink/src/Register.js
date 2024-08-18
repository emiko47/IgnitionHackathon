import { Box, Heading, } from "@chakra-ui/react";
import { useFormik, Formik, Form, ErrorMessage, Field } from "formik";
import { useState } from "react";
import * as Yup from 'yup';
import RegisterFormOne from "./RegisterFormOne.js"
import RegisterFormTwo from "./RegisterFormTwo.js"
import { setUserSession } from './services/AuthServices';
import { Navigate } from 'react-router-dom';

function Register (){

  const [data, setData] = useState({
    fullName:'', 
    email: '',
    username:'',
    password: '',
    role: '',
    industry: '',
    school: '',//self-explanatory
    year: '',//Grade 11, 12, Year 1,2,3,4 
    major: '',
    interests: [],
    bio: '',
    skills: '',
    profile_img:"",
  });

  const [currentStep, setCurrentStep] = useState(0);
  
        
  const makeRequest = async(parsedData) =>{
    try {
      alert(JSON.stringify(parsedData, null, 2))
      const response = await fetch("https://zjfr57vzyc.execute-api.us-east-2.amazonaws.com/Prod/register", {//login url is called from environment variables here
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept':'application/json',
          'x-api-key': "HJB0GmoOlO2RHgn7sOvbY4CrWqDV4HU98yFeADJ8",
        },
        body: JSON.stringify(parsedData, null, 2),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        alert("Registered Successfully")
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
      width={{md:'50%', lg:'100%', base:'100%'}}
      maxWidth={'100%'}
      maxHeight={'100vh'}
      overflowY={true}
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
