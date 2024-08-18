import React, { useState } from "react";
import './index.css';
import { isLoggedIn, setUserSession } from './AuthServices';
import Navbar from './Navbar';
import './linkup.css';


function LinkUp() {
    <Navbar />
    return(
        
        <div className='search'>
        <div className='search_container'> 
        

            <form role = 'search' id = "indstry">
                <input type = 'search' id = 'query1' name = 'q1' placeholder = "Search Industry..."></input>
            </form>

            <form role = 'search' id = "skills">
                <input type = 'search' id = 'query2' name = 'q2' placeholder = "Search Skills..."></input>
            </form>

            <form role = 'search' id = "interests">
                <input type = 'search' id = 'query3' name = 'q3' placeholder = "Search Interests..."></input>
            </form>
        </div>

        </div>
    );
}

export default LinkUp;