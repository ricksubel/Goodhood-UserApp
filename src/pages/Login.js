import React, { useState } from "react";
import { Container, Card, Form, Button } from 'react-bootstrap';

import AuthModel from "../models/AuthModel";
import UserModel from "../models/UserModel";

import { useSetRecoilState } from "recoil";
import { userState } from "../recoil/atoms.js";

import './Login.css';


function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const setUser = useSetRecoilState(userState);

    function handleSubmit(event) {
        event.preventDefault();

        AuthModel.login({ email, password }).then((response) => {
        console.log(response);
        localStorage.setItem("uid", response.signedJwt);
        UserModel.show().then((response) => {
            console.log(response)
            setUser(response.data);
            props.history.push("/profile:id");
        });
        });
    }


return (
    <Container fluid className="wrapper">
        <Container className="loginBox">
            <h4>Login</h4>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type='text'
                        name='email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        name='password'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </Form.Group>
                <Form.Group>
                    <Button type='submit' value='Login'>Login</Button>
                </Form.Group>
            </Form>
        </Container>
    </Container>
    );
}

export default Login;
