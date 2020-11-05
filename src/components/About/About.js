import React from 'react';
import { Container, Row } from 'react-bootstrap';

import AboutCarousel from './Carousel/Carousel';
import './About.css';

const About = () => {

    return (
        <Container fluid className="aboutUs">
            <Row>
                <AboutCarousel />
            </Row>
            <Row className="p-3">
                <Container className="content">
                    <h3>About Goodhood</h3>
                    <p>
                    Risus commodo viverra maecenas accumsan lacus vel facilisis. In hac habitasse platea dictumst quisque sagittis. Imperdiet dui accumsan sit amet nulla. Quis varius quam quisque id diam vel. Ac turpis egestas integer eget aliquet nibh. Dui id ornare arcu odio ut sem nulla pharetra. Sollicitudin aliquam ultrices sagittis orci. Ac auctor augue mauris augue neque gravida. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Cras pulvinar mattis nunc sed blandit libero volutpat.

                    Mollis aliquam ut porttitor leo. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Eu feugiat pretium nibh ipsum consequat nisl. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl. In metus vulputate eu scelerisque. Proin nibh nisl condimentum id venenatis a condimentum vitae.
                    </p>
                </Container>
            </Row>
        </Container>
    )
}


export default About;