import React, { Component } from 'react';
import Carousel from './Carousel/Carousel';
import './About.css';

class About extends Component {
    render() {
        return (
            <div className="about-container">
                <Carousel />
                <h3>About Goodhood:</h3>
            </div>
        )
    }
}

export default About;