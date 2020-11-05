import React, { useState } from "react";
import { Container, Form, Button } from 'react-bootstrap';

import AuthModel from "../models/AuthModel";
import './Login.css';

function Register(props) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [city, setCity] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        // send register request and on success redirect to login
        AuthModel.register({ username, email, password, city }).then((response) => {
            if (response.status === 201) {
                props.history.push("/login");
            }
        });
    }

return (
    <Container fluid className="back">
        <Container className="login-box">
            <h4>User Registration</h4>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label htmlFor='username'>Username</Form.Label>
                    <Form.Control
                        type='text'
                        name='username'
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor='email'>Email</Form.Label>
                    <Form.Control
                        type='text'
                        name='email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor='password'>Password</Form.Label>
                    <Form.Control
                        type='password'
                        name='password'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor='city'>Your City</Form.Label>
                    <Form.Control
                        type='text'
                        name='city'
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                    />
                </Form.Group>
                <Form.Group>
                    <Button 
                        className="loginButton"
                        variant='info'
                        type='submit' 
                        value='Register'>Register</Button>
                </Form.Group>
            </Form>
        </Container>
    </Container>
    );
}

export default Register;
