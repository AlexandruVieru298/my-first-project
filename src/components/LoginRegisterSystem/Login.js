import React,{ useEffect, useState} from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import {API_BASE_URL} from './constants/apiConstants';
import axios from 'axios';

function Login(props) {
    const [value, setValue] = useState();
    const navigate = useNavigate();
    const getUserData = (() => {
        axios
            .get(API_BASE_URL + '/user/', { headers: { "app-id": "61e5ac9956d1807d3361d37c" } })
            .then(function (response) {
                if (response.status === 200) {
                    console.log(response.data);
                    response.data.data.map((e) => {
                        if(value === e.email){
                            console.log(value);
                            navigate("/UserProfile")
                        }
                    });
                }
            })
    });

    useEffect(() => {
        // if(!localStorage.getItem("userID")){
        //     navigate("/Home");
        // };
       
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        getUserData();
    }
    return (
        <div>
            <div style={{ width: "10%", marginLeft: "auto", marginRight: "auto", backgroundColor: "#333", marginTop: "50px", padding: "5px", borderRadius: "30px" }}>
                <h1 style={{ marginLeft: "45px", marginTop: "5px", color: "#fff", fontSize: "18px" }}>Login</h1>
            </div>
            <div style={{ marginBottom: "223.1px" }} className="container">
                <Form style={{ width: "30%", marginLeft: "auto", marginRight: "auto", border: "1px solid #aebcc9", padding: "30px" }} className="mt-5">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" onChange={(e) =>{ setValue(e.target.value)}} placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button style={{ marginLeft: "128px", backgroundColor: "#333" }} variant="dark" onClick={handleSubmit} type="submit">
                        Login
                    </Button>
                    <p className="mt-2" style={{ width: "235px", marginLeft: "auto", marginRight: "auto" }}>Don't have an account? <Link className='existent-account-link' to="/Register">Register</Link></p>
                </Form>
            </div>
        </div>
    );
}

export default Login;