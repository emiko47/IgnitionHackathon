
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
//import {useNavigate} from 'react-router-dom';
//import { isLoggedIn, removeUserSession } from './AuthServices';


const Navbar = () => {
    //const navigate = useNavigate();
    const [showDashboardCard, setShowDashboardCard] = useState(false);
    const toggleDashboardCard = () => setShowDashboardCard(!showDashboardCard);

    return(
        <nav className = 'navbar'>
            <div className = "navbar_container">
                <Link to= '/' className = 'logo'>
                MentorLink
                </Link>

                <ul className='navbar_list'>
                    <li className="navbar_item">
                        <Link to='/' className = 'navbar_link'>Home</Link>
                    </li>

                    <li className="navbar_item">
                        <Link to='/' className = 'navbar_link'>Profile</Link>
                    </li>

                    <li className="navbar_item">
                        <Link to='/linkup' className = 'navbar_link'>Link-Up</Link>
                    </li>

                    <li className="navbar_item">
                    <button className='navbar_link' onClick={toggleDashboardCard}>
              Dashboard
            </button>
            {showDashboardCard && (
              <div className='dashboard_card'>
                <ul>
                  <li><a href='/dashboard'>Requests</a></li>
                  <li><a href='/mentorLinks'>Mentor Links</a></li>
                  <li><a href='/studentLink'>Student Links</a></li>
                </ul>
              </div>
            )}
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
