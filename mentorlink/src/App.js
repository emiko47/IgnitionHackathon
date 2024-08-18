import logo from './logo.svg';
import './App.css';
import Auth from './Auth';
import { BrowserRouter as Router, Route,Routes, Redirect, Switch } from 'react-router-dom';
import Register from './Register';
import {ThemeProvider, Link, Heading, Text, theme,Checkbox,
        ColorModeProvider, CSSReset, CardBody, Flex,Stack,Button, 
        Box, IconButton, useColorMode, FormControl, FormLabel, Input} from '@chakra-ui/react'
import ProtectedRoute from './ProtectedRoute';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
        <CSSReset/>
        
        <Router>
        <Auth/>
          <Routes>
              <Route
                  exact
                  path="/"
                  element={<Auth />}
              />
              <Route
                  exact
                  path="/dashboard"
                  element={<Dashboard />}
              />
            </Routes>
          </Router>
        
        </ColorModeProvider>
      </ThemeProvider>
    </div>
  );
}



export default App;
