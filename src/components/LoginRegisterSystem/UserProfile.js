import React, {useState, useEffect} from 'react';
import {useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from './constants/apiConstants';

function UserProfile(props) {
    const header = 'headers: { "app-id": "61e5ac9956d1807d3361d37c" }';
    const navigate = useNavigate();
    const [userData,setUserData] = useState({});  

    const handleLogout = (() => {
        localStorage.removeItem("userID"); // daca client-ul apasa pe button stergem local storage-ul si il redirectionam catre Home;
        navigate("/Home");
    });
    const getUserData = (() => {
        axios
            .get(API_BASE_URL + '/user/' + localStorage.getItem('userID'), { headers: { "app-id": "61e5ac9956d1807d3361d37c" } })
            .then(function (response) {
                if (response.status === 200) {
                    console.log(response);
                    setUserData(response.data);
                }
            })
    });

    useEffect(() => {
        if(!localStorage.getItem("userID")){
            navigate("/Home");
        };
        console.log(localStorage.getItem("userID"));
        getUserData();
        console.log(userData);
    }, []);


    return (
        <div>
            <h1>First Name: {userData.firstName}</h1>
            <button onClick={handleLogout}>Click here</button>
        </div>
    );
}

export default UserProfile;