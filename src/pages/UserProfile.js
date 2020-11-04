import React from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '../recoil/atoms';
import { Card, Image, Row } from 'react-bootstrap';

import Default from '../components/Posts/ShowPosts/images/default.jpg'
import '../components/Posts/ShowPosts/PostContainer.css'

const Profile = (props) => {
    const [user] = useRecoilState(userState);

    return (
        <Card bg="secondary" text="white" style={{ width: '36rem' }}>
            <Card.Header d-inline>
                <Card.Text>My Profile</Card.Text>
                <Card.Text variant="float-right">Edit</Card.Text>
            </Card.Header>
            <Card.Body>
                <Card.Title>Welcome back, {user.username}!</Card.Title>
                <Image id="profile-img" src={Default} roundedCircle></Image>
                <Card.Text>
                    <h5>Hometown: {user.city}</h5>
                    <h6>Member since: {user.date}</h6>
                    <hr/>
                    <p>My posts:</p>
                    <p>Title: a;sdlfjk ;alsdjk ;alsdfjk</p>
                    <p>Title: a;sdlfjk ;alsdjk ;alsdfjk</p>
                    <p>Title: a;sdlfjk ;alsdjk ;alsdfjk</p>
                    <p>Title: a;sdlfjk ;alsdjk ;alsdfjk</p>
                    <p>Title: a;sdlfjk ;alsdjk ;alsdfjk</p>
                    <p>Title: a;sdlfjk ;alsdjk ;alsdfjk</p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Profile;
