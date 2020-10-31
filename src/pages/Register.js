import React, { useState } from "react";
import AuthModel from "../models/AuthModel";

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
    <div>
        <h2>Register for an Account!</h2>
        <form onSubmit={handleSubmit}>
            <div className='form-input'>
            <label htmlFor='username'>Username</label>
            <input
                type='text'
                name='username'
                onChange={(e) => setUsername(e.target.value)}
                value={username}
            />
            </div>
            <div className='form-input'>
            <label htmlFor='email'>Email</label>
            <input
                type='text'
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            </div>
            <div className='form-input'>
            <label htmlFor='password'>Password</label>
            <input
                type='password'
                name='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            </div>
            <div className='form-input'>
            <label htmlFor='city'>Your City</label>
            <input
                type='text'
                name='city'
                onChange={(e) => setCity(e.target.value)}
                value={city}
            />
            </div>

            <input type='submit' value='Register' />
        </form>
        </div>
    );
}

export default Register;
