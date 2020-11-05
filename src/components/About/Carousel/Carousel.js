import React from 'react';
import { Carousel } from 'react-bootstrap';

import './Carousel.css';
import Carousel1 from './images/Carousel1.jpg';
import Carousel2 from './images/Carousel2.jpg';
import Carousel3 from './images/Carousel3.jpg';
import Carousel4 from './images/Carousel4.jpg';
import Carousel5 from './images/Carousel5.jpg';
import Carousel6 from './images/Carousel6.jpg';

const AboutCarousel = () => {

    return (
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={Carousel1} alt="First slide"></img>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
                <img className="d-block w-100" src={Carousel2} alt="Second slide"></img>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
                <img className="d-block w-100" src={Carousel3} alt="Third slide"></img>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
                <img className="d-block w-100" src={Carousel4} alt="Fourth slide"></img>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
                <img className="d-block w-100" src={Carousel5} alt="Fifth slide"></img>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
                <img className="d-block w-100" src={Carousel6} alt="Fifth slide"></img>
            </Carousel.Item>
        </Carousel>
    )
}


export default AboutCarousel;