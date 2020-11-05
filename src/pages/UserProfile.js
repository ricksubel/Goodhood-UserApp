import React from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '../recoil/atoms';
import { Card, Image, Container } from 'react-bootstrap';

import Default from '../components/Posts/ShowPosts/images/default.jpg'
import './UserProfile.css';

const Profile = (props) => {
    const [user] = useRecoilState(userState);


    return (
        <Container fluid className="wrapper">
            <Container className="profile-box">
                <Container className="profile-info" style={{ width: '36rem' }}>
                    <Card.Header d-inline>
                        <Card.Text>My Profile</Card.Text>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>Welcome back, {user.username}!</Card.Title>
                        <Image id="profile-img" src={Default} roundedCircle></Image>
                        <Card.Text>
                            <h5>Hometown: {user.city}</h5>
                            <h6>Member since: {user.date}</h6>
                            <hr/>
                            <p>My posts:</p>
                            <p>{user.posts}</p>
                        </Card.Text>
                    </Card.Body>
                </Container>
            </Container>
        </Container>
    );
}

export default Profile;
