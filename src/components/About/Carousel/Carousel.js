import React, { Component } from 'react';

import './Carousel.css';
import Carousel1 from './images/Carousel1.jpg';
import Carousel2 from './images/Carousel2.jpg';
import Carousel3 from './images/Carousel3.jpg';
import Carousel4 from './images/Carousel4.jpg';

class Carousel extends Component {
    render() {
        return (
                <div className="row">
                    <div id="carouselIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={Carousel1} alt="First slide"></img>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={Carousel2} alt="Second slide"></img>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={Carousel3} alt="Third slide"></img>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={Carousel4} alt="Fourth slide"></img>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
        )
    }
}

export default Carousel;