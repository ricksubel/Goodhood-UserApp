import React, { useState } from 'react';
import { Container, Form, Button, Accordion, Card } from 'react-bootstrap';

import PostModel from '../../models/PostModel';

import cityList from '../Cities/cities';
import useCities from "../../hooks/useCities";
import { faTag } from '@fortawesome/free-solid-svg-icons';


const CreatePost = (props) => {
    const tagsList = [
        'Physical Health', 'Mental Health', 'Finances', 'Career Development', 'Education', 'Social Issues', 'Political', 'Neighborhood Development', 'Crime and Safety', 'Substance Abuse', 'Childcare', 'Elderly Care', 'Bartering Services', 'Landscaping and Lawncare', 'Home Repair & Remodeling' 
    ]
    // const [cityList] = useCities();

    const [category, setCategory] = useState('') 
    const [tags, setTags] = useState('')
    const [city, setCity] = useState('') 
    const [title, setTitle] = useState('') 
    const [message, setMessage] = useState('') 

    const formData = { category, tags, city, title, message } 

    const refreshPage = () => {
        window.location.reload();
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        PostModel.create(formData).then((data) => {
            // props.history.push("/for-help");
            
        });
    }

    return (   
        <Container>
            <h3>Create New Post</h3>
            {/* TODO {allCities.length > 0 ?  */}
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Check inline label="Needing Help"
                            type="radio" 
                            name="typeOptions" 
                            id="typeNeed" 
                            value="Needing Help"
                            onChange={(e) => setCategory(e.target.value)}
                            />
                        <Form.Check inline label="Offering Help"
                            type="radio" 
                            name="typeOptions" 
                            id="typeOffering" 
                            value="Offering Help" 
                            onChange={(e) => setCategory(e.target.value)}
                            />
                        <Form.Check inline label="Neighborhood Suggestions" 
                            type="radio" 
                            name="typeOptions" 
                            id="typeGeneral" 
                            value="Neighborhood Suggestions" 
                            onChange={(e) => setCategory(e.target.value)}
                            />
                    </Form.Group>
                    {/* TODO fix this!!! */}
                    <Form.Group>
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle as={Button} variant="outline-primary" size="sm" eventKey="1">
                                    Select Categories:
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                    {['checkbox'].map((type) => (
                                        <Form.Check>
                                        {tagsList.map((tag, idx) => (
                                            <Form.Check inline key={idx} label={tag} value={tag}
                                            onChange={(e) => setTags(e.target.value)}
                                            />
                                        ))}
                                        </Form.Check>
                                    ))}
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Form.Group>
                    {/* TODO Fix this!!! */}
                    <Form.Group>
                        <Form.Label>Select City</Form.Label>
                        {/* <Form.Control as="select" onChange={(e)=> setCity(e.target.value)}> */}
                            {/* TODO fix this!!! */}
                            {/* {cityList > 0 ? cityList.map(city => { */}
                            {/* return <option value={city.id} key={city.id}>{city.city}, {city.state}</option>    
                            }): null} */}
                        {/* </Form.Control> */}
                        <Form.Control type="text" onChange={(e)=> setCity(e.target.value)}/>
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
                        <Button type="submit" value="Post" onClick={refreshPage}>Submit Post</Button>
                    </Form.Group>
                </Form>
            {/* TODO :null} */}
        </Container>
    )
}

export default CreatePost;