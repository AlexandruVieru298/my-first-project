import React from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import '../utils/Home.css';
import Logo from '../static/images/logo.svg';
import Form from '../components/ToDo/Form';
import ListComponent from '../components/CryptoList/ListComponent';
import Login from '../components/LoginRegisterSystem/Login';
import Register from '../components/LoginRegisterSystem/Register';
import UserProfile from '../components/LoginRegisterSystem/UserProfile';

function Nav(props) {
    return (
        <BrowserRouter>
            <nav style={{ minHeight: "100%" }}>
                <ul>
                    <Link to="/" style={{ display: "inline" }} className="nav-link"><img src={Logo} alt="Logo"></img></Link>
                     <li><Link to="/UserProfile" className="nav-link">User Profile</Link></li>
                    <li><Link to="/Register" className="nav-link">Register</Link></li>
                    <li><Link to="/Login" className="nav-link">Login</Link></li>
                    <li><Link to="/ListComponent" className="nav-link">Crypto</Link></li>
                    <li><Link to="/Form" className="nav-link">To Do</Link></li>
                    <li><Link to="/Home" className="nav-link">Home</Link></li>
                </ul>
                <div>
                    <Routes>
                        <Route exact path="/" element={< Home />} />
                        <Route path="/Home" element={< Home />} />
                        <Route path="/Form" element={<Form />} />
                        <Route path="/ListComponent" element={<ListComponent />} />
                        <Route path="/Login" element={<Login />} />
                        <Route path="/Register" element={<Register />} />
                        <Route path="/UserProfile" element={<UserProfile />} />
                    </Routes>
                </div>
            </nav>
        </BrowserRouter>
    );
}

export default Nav;