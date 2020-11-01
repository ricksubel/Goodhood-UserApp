import React, { Component } from 'react';

import { Modal, Container, Col, Row, Card, Button } from 'react-bootstrap';
import CreatePost from '../Posts/CreatePost';
import Love from './images/loveYN.jpg';
import './ForHelp.css';

class ForHelp extends Component {

    state = {
        isOpen: false
    };

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    render() {
        return (
            <Container fluid>
                    <Row>
                        <Col md={3} className="side-info">
                            <Container>
                                <Card>
                                    <Card.Img variant="top" src={Love} />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        <Button variant="primary" size="sm">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                                <hr></hr>
                                <Card>
                                    <Card.Body>
                                        Ornare suspendisse sed nisi lacus sed viverra tellus. Egestas congue quisque egestas diam in arcu. Tincidunt augue interdum velit euismod in. Velit laoreet id donec ultrices tincidunt. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Imperdiet sed euismod nisi porta lorem mollis aliquam.
                                    </Card.Body>
                                </Card>
                            </Container>
                        </Col>
                        
                        <Col md={6}>
                            <Container className="posts">
                                <button type="button" class="btn btn-outline-primary btn-circle btn-sm float-right" onClick={this.openModal}><i class="fas fa-plus"></i></button> 
                                <Modal show={this.state.isOpen} onHide={this.closeModal}>
                                    <CreatePost />
                                </Modal>
                                <h3>Let's find you the help you need!</h3>

                            </Container>

                            <Container>
                                <p className="post text-truncate">
                                    Ornare suspendisse sed nisi lacus sed viverra tellus. Egestas congue quisque egestas diam in arcu. Tincidunt augue interdum velit euismod in. Velit laoreet id donec ultrices tincidunt. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Imperdiet sed euismod nisi porta lorem mollis aliquam.
                                </p>
                                    <hr></hr>
                                <p className="post text-truncate">
                                    Elit eget gravida cum sociis natoque penatibus et. Ut eu sem integer vitae justo eget magna. Risus viverra adipiscing at in tellus. Dictumst quisque sagittis purus sit. Quisque id diam vel quam elementum pulvinar. Risus nullam eget felis eget nunc. Id faucibus nisl tincidunt eget nullam.
                                </p>
                            </Container>
                        </Col>
                        <Col md={3} className="side-info">
                            <Container>Ornare suspendisse sed nisi lacus sed viverra tellus. Egestas congue quisque egestas diam in arcu. Tincidunt augue interdum velit euismod in. Velit laoreet id donec ultrices tincidunt. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Imperdiet sed euismod nisi porta lorem mollis aliquam.
                            </Container>
                        </Col>
                        
                    </Row>
            </Container>
        )
    }
}

export default ForHelp;