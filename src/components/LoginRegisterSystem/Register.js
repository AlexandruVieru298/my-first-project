import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';
import {API_BASE_URL} from './constants/apiConstants';
import axios from 'axios';

function Register(props) {
    const header = 'headers: { "app-id": "61e5ac9956d1807d3361d37c" }';
    const navigate = useNavigate();
    const [stateEmail, setStateEmail] = useState();
    const [statePassword, setStatePassword] = useState();
    const [statePasswordConfirmed, setStatePasswordConfirmed] = useState();
    useEffect(() => {
        if(localStorage.getItem("userID")){ // daca userId-ul exista in local storage , atunci client-ul va fii redirectionat catre Home;
            navigate("/Home");
        };
    },[]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            firstName: "Adrian",
            lastName: "Alexandru",
            email: stateEmail,
            password: statePassword,
        }
        if(statePassword === statePasswordConfirmed){
        axios
            .post(API_BASE_URL + "/user/create", payload, {
                headers: { "app-id": "61e5ac9956d1807d3361d37c" }
            }) // trimitem catre api , payload-ul
            .then(function (response) {
                console.log(response);
                if(response.status === 200){
                    console.log("am intrat");
                    console.log(response.data.id);
                    localStorage.setItem("userID",response.data.id) // daca a functionat , salvam in local storage si redirectionam clientul in Home
                    navigate("/Home");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        }
        else {
            console.log("eroare - parola gresita");
        }
    }
    return (
        <div>
            <div style={{ width: "10%", marginLeft: "auto", marginRight: "auto", backgroundColor: "#333", marginTop: "50px", padding: "5px", borderRadius: "30px" }}>
                <h1 style={{ marginLeft: "38px", marginTop: "5px", color: "#fff", fontSize: "18px" }}>Register</h1>
            </div>
            <div className="container">
                <Form style={{ width: "30%", marginLeft: "auto", marginRight: "auto", border: "1px solid #aebcc9", padding: "30px" }} className="mt-5">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setStateEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => setStatePassword(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword2">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" onChange={(e) => setStatePasswordConfirmed(e.target.value)}/>
                    </Form.Group>
                    <Button style={{ marginLeft: "122px", backgroundColor: "#333" }} onClick={(e) => handleSubmit(e)} variant="dark" type="submit">
                        Register
                    </Button>
                    <p className="mt-2" style={{ width: "265px", marginLeft: "auto", marginRight: "auto" }}>Already have an account? <Link className='existent-account-link' to="/Login">Login here</Link></p>
                </Form>
            </div>

        </div>
    );
}

export default Register;