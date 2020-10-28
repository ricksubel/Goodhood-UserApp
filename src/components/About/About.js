import React, { Component } from 'react';
import Carousel from './Carousel/Carousel';
import './About.css';

class About extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Carousel />
                </div>
                <h3>About Goodhood:</h3>
                <p>
                Risus commodo viverra maecenas accumsan lacus vel facilisis. In hac habitasse platea dictumst quisque sagittis. Imperdiet dui accumsan sit amet nulla. Quis varius quam quisque id diam vel. Ac turpis egestas integer eget aliquet nibh. Dui id ornare arcu odio ut sem nulla pharetra. Sollicitudin aliquam ultrices sagittis orci. Ac auctor augue mauris augue neque gravida. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Cras pulvinar mattis nunc sed blandit libero volutpat.
                </p>
            </div>
        )
    }
}

export default About;