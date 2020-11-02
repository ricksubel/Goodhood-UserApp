import React from 'react';

import { useRecoilState } from "recoil";
import { userState } from "../recoil/atoms";



const Profile = (props) => {
    const [user] = useRecoilState(userState);

    return (
        <div>
            <div className="container mt-5">
                <h3>Welcome, {user.username}!</h3>
            </div>
        </div> 
    );
}

export default Profile;
