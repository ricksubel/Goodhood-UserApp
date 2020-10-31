import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';

import PostModel from '../../models/PostModel';

const CreatePost = (props) => {
    const allCities = ['a','b','c']

    const [type, setType] = useState('') 
    const [city, setCity] = useState('') 
    const [title, setTitle] = useState('') 
    const [description, setDescription] = useState('') 

    const formData = { type, city, title, description } 

    const handleSubmit = (event) => {
        event.preventDefault();
        PostModel.create(formData).then((data) => {
                props.history.push("/posts");
            }
        );
    }

    return (   
        <Container>
            <h3>Create New Post</h3>
            {allCities.length > 0 ? 
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Check inline label="Needing Help"
                            type="radio" 
                            name="typeOptions" 
                            id="typeNeed" 
                            value="Needing Help"
                            onChange={(e) => setType(e.target.value)}
                            />
                        <Form.Check inline label="Offering Help"
                            type="radio" 
                            name="typeOptions" 
                            id="typeOffering" 
                            value="Offering Help" 
                            onChange={(e) => setType(e.target.value)}
                            />
                        <Form.Check inline label="Neighborhood Suggestions" 
                            type="radio" 
                            name="typeOptions" 
                            id="typeGeneral" 
                            value="Neighborhood Suggestions" 
                            onChange={(e) => setType(e.target.value)}
                            />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Select City</Form.Label>
                        <Form.Control as="select" onChange={(e)=> setCity(e.target.value)}>
                            {allCities.length > 0 ? allCities.map(city => {
                            return <option value={city.id} key={city.id}>{city.city}, {city.regionCode}</option>    
                            }): null}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                            <Form.Label>Title:</Form.Label>
                            <Form.Control type="text" onChange={(e)=> setTitle(e.target.value)}/>
                    </Form.Group>
                    <Form.Group> 
                        <Form.Label>Description: </Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={(e)=> setDescription(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Button type="submit" value="Post">Submit Post</Button>
                    </Form.Group>
                </Form>
            :null}
        </Container>
    )
}

export default CreatePost;