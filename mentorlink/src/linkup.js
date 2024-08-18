import React from 'react';
import './linkup.css';
import adidas from './adidas1.jpg'

const LinkUp = () => {
    return(
        <div className = "linkup">
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

            <div className='search_display'>
                <div className = "card">
                    <p>hi</p>
                    <img src={adidas} className= "image" alt="oops..."/>
                </div>
            </div>
        </div>

        

    );
}

export default LinkUp;

