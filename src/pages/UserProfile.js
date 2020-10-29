import React from 'react';

import { useRecoilState } from "recoil";
import { userState } from "../recoil/atoms";

import Navbar from '../components/Navbar/Navbar';


const Profile = (props) => {
    const [user] = useRecoilState(userState);

    return (
        <div>
            <Navbar />
            <div className="container mt-5">
                <h3>Welcome, {user.username}!</h3>
            </div>
        </div>
        
    );
}

export default Profile;
