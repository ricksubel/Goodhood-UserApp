import React from 'react';

import { useRecoilState } from "recoil";
import { userState } from "../recoil/atoms";

const Profile = (props) => {
    const [user] = useRecoilState(userState);

    return (
        <div>
            <div className="container mt-5">
                <h3>Welcome, {user.username}!</h3>
                <h5>{user.city}</h5>
                <h6>Member since: {user.date}</h6>
            </div>
        </div> 
    );
}

export default Profile;
