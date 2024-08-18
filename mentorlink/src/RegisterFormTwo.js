import {  FormControl, FormLabel, Input, Button, Spacer, Textarea } from "@chakra-ui/react";
import { Formik, Form, ErrorMessage, Field, } from "formik";

import { Select } from "chakra-react-select";
import {interestOptions, mentorOptions, levelOptions, categoryOptions, educationOptions} from "./data/data"





function RegisterFormTwo(props){

    let userCategory = "";
    let userRole = "";
    let userEducation = "";
    let userYear = "";
    let userInterests = [];
    const formFinalData = {};
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
   const SelectYear = ()=>(

        <Select name="year"
            placeholder="Select your grade/year"
            variant="outline"
            options={levelOptions}
            onChange={(options)=>{
                userYear = options;
            }}
        />
   );
   const SelectEducation = ()=>(

        <Select name="education" 
        placeholder="High School/ University"
        variant="outline"
        options={educationOptions}
        onChange={(options)=>{
            userEducation = options;
        }}/>
   
   );
   const SelectRole = ()=>(

        <Select name="mentor" 
        placeholder="Mentor/Mentee"
        variant="outline"
        options={mentorOptions}
        onChange={(options)=>{
            userRole = options;
        }}/>
   );
   const SelectCategory = ()=>(

    <Select name="category" 
    placeholder="Student/Professional"
    variant="outline"
    options={categoryOptions}
    onChange={(options)=>{
        userCategory = options;
    }}/>
   );

    return(
    <Formik
    initialValues={props.data}
    onSubmit={(values, actions) =>{
        console.log("first",values.year);
        values.year = userYear;
        values.role = userRole;
        values.education = userEducation;
        values.category = userCategory;
        values.interests = userInterests;
        console.log("second",values.year);
        props.next(values, true);
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            console.log(values);
            actions.setSubmitting(false)
          }, 1000);
    }}>

    {
      (formProps) =>(
        <Form >
          <FormControl p={4}>
            <FormLabel htmlFor="category">Category</FormLabel>
            <Field name="category" as={SelectCategory}/>
            <ErrorMessage name="category" />
          </FormControl>
          <FormControl p={4}>
            <FormLabel htmlFor="role">Are you signing up to be a Mentor or Mentee?</FormLabel>
            <Field name="role" as={SelectRole}/>
            <ErrorMessage name="role" />
          </FormControl>
          <FormControl p={4}>
            <FormLabel htmlFor="education">Education</FormLabel>
            <Field name="education" as={SelectEducation}/>
            <ErrorMessage name="education" />
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
            <FormLabel htmlFor="bio">Bio</FormLabel>
            <Field as={Textarea} placeholder='Write a bio so people can relate with you... ' name="bio" type="textarea" />

            <ErrorMessage name="bio" />
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
                isLoading={formProps.isSubmitting}
                type='submit'
            >
                Finish
            </Button>
          
          
        </Form>
      )
      
    }
  
    </Formik>
    );
} 

export default RegisterFormTwo;