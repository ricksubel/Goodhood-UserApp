import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
// import axios from 'axios';
import cityList from '../Cities/cities';

import PostModel from '../../models/PostModel';
import useCities from "../../hooks/useCities";


const CreatePost = (props) => {
    // TODO do I use a hook???
    // const [cityList] = useCities();

    const [type, setType] = useState('') 
    const [city, setCity] = useState('') 
    const [title, setTitle] = useState('') 
    const [message, setMessage] = useState('') 

    const formData = { type, city, title, message } 

    const handleSubmit = (event) => {
        event.preventDefault();

        PostModel.create(formData).then((data) => {
            props.history.push("/:id");
        });
    }

    return (   
        <Container>
            <h3>Create New Post</h3>
            {/* {allCities.length > 0 ?  */}
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
                            {/* TODO fix this!!! */}
                            {cityList > 0 ? cityList.map(city => {
                            return <option value={city.id} key={city.id}>{city.city}, {city.state}</option>    
                            }): null}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                            <Form.Label>Title:</Form.Label>
                            <Form.Control type="text" onChange={(e)=> setTitle(e.target.value)}/>
                    </Form.Group>
                    <Form.Group> 
                        <Form.Label>Message: </Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={(e)=> setMessage(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Button type="submit" value="Post">Submit Post</Button>
                    </Form.Group>
                </Form>
            {/* :null} */}
        </Container>
    )
}

export default CreatePost;