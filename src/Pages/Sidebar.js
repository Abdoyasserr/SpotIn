import React from "react";
import "./CSS-files/Sidebar-css/Sidebar.css";
import photo from "./CSS-files/Sidebar-css/LOGO - BLACK.png";
import photo2 from "./CSS-files/Sidebar-css/logo2.png";
import { Link, useNavigate } from 'react-router-dom';


function Sidebar() {
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem('token');
        navigate('/');
        
    }
    return (
        <div>
            <div>
                <nav>
                    <ul>
                        <li>
                            <a>
                                <img className="sidelogo" src={photo} alt="" />
                                <img className="sidelogo2" src={photo2} alt="" />
                            </a>
                        </li>
                        <li id="l1">
                            <Link to="/Home">
                                <i id="icon" className="fas fa-regular fa-id-badge"></i>
                                <span className="nav-item">Employees</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Branches">
                                <i id="icon" className="fas fa-solid fa-building"></i>
                                <span className="nav-item">Branches</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Reports">
                                <i id="icon" class="fas fa-solid fa-chart-bar"></i>
                                <span className="nav-item">Reports</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="logout" onClick={handleLogout}>
                                <i id="logo_logout" className="fas fa-sign-out-alt"></i>
                                <span className="nav-item">Log out</span>
                            </Link>
                        </li>

                    </ul>
                </nav>
            </div>
        </div>

    );
}

export default Sidebar