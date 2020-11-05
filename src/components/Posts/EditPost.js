import React from 'react';
import PostModel from '../../models/PostModel'; 
import { Container, Form, Button, Accordion, Card } from 'react-bootstrap';

import './CreatePost.css';


const tagsList = [
    'Physical Health', 'Mental Health', 'Finances', 'Career Development', 'Education', 'Social Issues', 'Political', 'Neighborhood Development', 'Crime and Safety', 'Substance Abuse', 'Childcare', 'Elderly Care', 'Bartering Services', 'Landscaping and Lawncare', 'Home Repair & Remodeling' 
]



class EditPost extends React.Component {
    state = {
        category: '',
        tags: '',
        city: '',
        title: '',
        message: '',
        formTitle: '',
    }
    

    componentDidMount() {
        this.fetchPost();
    }

    fetchPost = () => {
        PostModel.show(this.props.match.params.id)
            .then(json => {
                console.log(json, "ERROR HERE")
                this.setState({
                    ...json.Post,
                    formTitle: json.Post.title
                })
            })
    }


    handleSubmit = (event) => {
        event.preventDefault();
        PostModel.update(this.props.match.params.id, this.state)
            .then(json => {
                this.props.history.push(`/neighborhood`)
                console.log("POST UPDATED!");  
            })
    }

    handleChange = (event) => {
        console.log(event.target.name, event.target.value)
        if(event.target.type === 'checkbox') {
            this.setState(prevState => ({
                tags: [...prevState.tags, event.target.value]
            }))

        } else {   
            this.setState({
                [event.target.name]: event.target.value
            })
        }
    }

    render() {
        return (
            <Container>
                <h3>Edit Post: {this.state.formTitle}</h3>
                {/* TODO {allCities.length > 0 ?  */}
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Check 
                                inline label="Needing Help"
                                type="radio" 
                                name="category" 
                                onChange={this.handleChange}
                                value="Needing help"
                                checked={this.state.category === "Needing Help"}
                                />
                            <Form.Check 
                                inline label="Offering Help"
                                type="radio" 
                                name="category" 
                                onChange={this.handleChange}
                                value="Offering Help"
                                checked={this.state.category === "Offering Help"}
                                />
                            <Form.Check 
                                inline label="Neighborhood Suggestions" 
                                type="radio" 
                                name="category"
                                onChange={this.handleChange}
                                value="Neighborhood Suggestions"
                                checked={this.state.category === "Neighborhood Suggestions"}
                                />
                        </Form.Group>
                        {/* TODO fix this!!! */}
                        <Form.Group>
                            <Accordion defaultActiveKey="0">
                                <Card>
                                    <Accordion.Toggle 
                                        as={Button}                           
                                        variant="outline-primary" 
                                        size="sm" eventKey="1">
                                        Select Categories:
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>
                                        {['checkbox'].map((type) => (
                                            <Form.Check>
                                            {tagsList.map((tag, idx) => (
                                            <Form.Check 
                                                label={tag} 
                                                inline key={idx} 
                                                type='checkbox'
                                                name={tag}
                                                onChange={this.handleChange}
                                                value={tag}
                                                checked={this.state.tags.includes(tag)}
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
                                {/* return <option value={city.id} key={city.id}>{city.city}, {city.state}</
                                checked={option>    
                                }): null} */}
                            {/* </Form.Control> */}
                            <Form.Control 
                                type="text"
                                name="city"
                                onChange={this.handleChange}
                                value={this.state.city}
                                />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Title:</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="title"
                                onChange={this.handleChange}
                                value={this.state.title}
                                />
                        </Form.Group>
                        <Form.Group> 
                            <Form.Label>Message: </Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={3} 
                                name="message"
                                onChange={this.handleChange}
                                value={this.state.message}
                                />
                        </Form.Group>
                        <Form.Group>
                            <Button 
                                variant="info"
                                type="submit" 
                                value="Update" 
                                >Update</Button>
                        </Form.Group>
                    </Form>
                {/* TODO :null} */}
            </Container>
        )
    }
}   


export default EditPost;
