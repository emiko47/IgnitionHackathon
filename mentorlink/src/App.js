//import logo from './logo.svg';
import './App.css';
import './navbar.css';
import Navbar from './navbar.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Linky from './linkup.js';
import Dash from './dashboard';
import Mentor from './mentorLinks';
import Student from './studentLink';
//import ProtectedRoute from './ProtectedRoute';


function App() {
  return (
    
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route
              path="/linkup"
              element={
                
                  <Linky />
                
              }
            />

            <Route 
            path = "/dashboard"
            element = {
              <Dash/>
            }/>

            <Route 
            path = "/mentorLinks"
            element = {
              <Mentor/>
            }/>

            

            <Route 
            path = "/studentLink"
            element = {
              <Student/>
            }/>
              
            </Routes>
        </div>
      </BrowserRouter>
    
  );
}

export default App;
