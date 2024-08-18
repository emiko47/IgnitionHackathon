import {  FormControl, FormLabel, Input, Button, Spacer, Textarea, Box } from "@chakra-ui/react";
import { Formik, Form, ErrorMessage, Field} from "formik";

import { Select } from "chakra-react-select";
import {interestOptions, levelOptions, industryOptions, roleOptions, skillOptions} from "./data/data"
import { setUserSession } from './services/AuthServices';




function RegisterFormTwo(props){

    let userSkills = [];
    let userRole = "";
    let userYear = "";
    let userInterests = [];
    let userIndustry = "";
   const SelectInterest = ()=>(

        <Select
        isMulti
        name="interests"
        placeholder="Select your interests..."
        variant="outline"
        options={interestOptions}
        onChange={(options)=>{
            userInterests = options;
        }}
    />
   );
   const SelectSkills = ()=>(

        <Select
        isMulti
        name="skills"
        placeholder="Select your interests..."
        variant="outline"
        options={skillOptions}
        onChange={(options)=>{
            userSkills = options;
        }}
    />
   );
   const SelectYear = ()=>(

        <Select name="year"
            placeholder="Select your grade/year"
            variant="outline"
            options={levelOptions}
            onChange={(options)=>{
                userYear = options.label;
            }}
        />
   );
   const SelectRole = ()=>(

        <Select name="role" 
        placeholder="Mentor/Mentee"
        variant="outline"
        options={roleOptions}
        onChange={(options)=>{
            userRole = options.label;
        }}/>
   );
   const SelectIndustry = ()=>(

    <Select name="industry" 
    placeholder="Student/Professional"
    variant="outline"
    options={industryOptions}
    onChange={(options)=>{
        userIndustry = options.label;
    }}/>
   );

    return(
    <Box
    maxHeight={"100vh"}
    overflowY={true}
    >

    
    <Formik
    
    initialValues={props.data}
    onSubmit={(values, actions) =>{
        const parsedInterest =  userInterests.map(item => item.label);
        const parsedSkills =  userSkills.map(item => item.label);

        const parsedData = {
          "email":values.email,
          "password": values.password,
          "name": values.fullName,
          "username": values.username,
          "bio": values.bio,
          "industry": values.industry,
          "interests": parsedInterest,
          "major": values.major,
          "img_src": values.profile_img,
          "role": values.role,
          "school": values.school,
          "skills": parsedSkills,
        }
        values.year = userYear;
        values.role = userRole;
        values.skills = userSkills;
        values.industry = userIndustry;
        values.interests = userInterests;
        props.next(parsedData, true);
    }}>

    {
      (formProps) =>(
        <Form >
          <FormControl p={4}>
            <FormLabel htmlFor="role">Are you signing up to be a Mentor or Mentee?</FormLabel>
            <Field name="role" as={SelectRole}/>
            <ErrorMessage name="role" />
          </FormControl>
          <FormControl p={4}>
            <FormLabel htmlFor="industry">Industry</FormLabel>
            <Field name="industry" as={SelectIndustry}/>
            <ErrorMessage name="category" />
          </FormControl>
          <FormControl p={4}>
            <FormLabel htmlFor="school">School</FormLabel>
            <Field as={Input} name="school" type="text" />
            <ErrorMessage name="school" />
          </FormControl>
          <FormControl p={4}>
            <FormLabel htmlFor="year">Year/Level</FormLabel>
            <Field name="year" as={SelectYear}/>
            <ErrorMessage name="year" />
          </FormControl>
          <FormControl p={4}>
            <FormLabel htmlFor="major">Major</FormLabel>
            <Field as={Input} name="major" type="text" />
            <ErrorMessage name="major" />
          </FormControl>
          <FormControl p={4}>
            <FormLabel>Interests </FormLabel>
            <Field name="interests" as={SelectInterest}/>
            <ErrorMessage name="interests" />
            </FormControl>
          <FormControl p={4}>
            <FormLabel>Skills </FormLabel>
            <Field name="skills" as={SelectSkills}/>
            <ErrorMessage name="skills" />
            </FormControl>
          <FormControl p={4}>
            <FormLabel htmlFor="bio">Bio</FormLabel>
            <Field as={Textarea} placeholder='Write a bio so people can relate with you... ' name="bio" type="textarea" />
            <ErrorMessage name="bio" />
          </FormControl>
          <FormControl p={4}>
            <FormLabel htmlFor="profile_img">Profile photo</FormLabel>
            <Field as={Textarea} placeholder='Write a bio so people can relate with you... ' name="profile_img" type="textarea" />
          </FormControl>
          
            <Button
                mt={4}
                colorScheme='teal'
                type='button'
                onClick={()=>props.prev(formProps.values)}
                
            >
                Back
            </Button>
            <Spacer />
            <Button
                mt={4}
                colorScheme='teal'
                // isLoading={formProps.isSubmitting}
                type='submit'
            >
                Finish
            </Button>
          
          
        </Form>
      )
      
    }
  
    </Formik></Box>
    );
} 

export default RegisterFormTwo;