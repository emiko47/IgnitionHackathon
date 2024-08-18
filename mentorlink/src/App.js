import logo from './logo.svg';
import './App.css';
import Auth from './Auth';
import Register from './Register';
import {ThemeProvider, Link, Heading, Text, theme,Checkbox,
        ColorModeProvider, CSSReset, CardBody, Flex,Stack,Button, 
        Box, IconButton, useColorMode, FormControl, FormLabel, Input} from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
        <CSSReset/>
        <Auth/>
        <Register/>
        </ColorModeProvider>
      </ThemeProvider>
    </div>
  );
}



export default App;
