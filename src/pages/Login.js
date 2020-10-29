import React, { useState } from "react";
import AuthModel from "../models/AuthModel";
import UserModel from "../models/UserModel";
import { useSetRecoilState } from "recoil";
import { userState } from "../recoil/atoms.js";


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
            props.history.push("/posts");
        });
        });
    }


return (
    <div className="container">
        <div style={{marginTop: 100}}>
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className='form-input'>
                    <label>Email</label>
                    <input
                        className="form-control"
                        type='text'
                        name='email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    </div>
                </div>
                <div className="form-group">
                    <div className='form-input'>
                    <label>Password</label>
                    <input
                        className="form-control"
                        type='password'
                        name='password'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    </div>
                </div>
                <div className="form-group">
                    <input type='submit' value='Login' />
                </div>
            </form>
        </div>
    </div>
    );
}

export default Login;
