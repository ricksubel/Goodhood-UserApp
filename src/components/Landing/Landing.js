import React from 'react';
import Header from './Header/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import './Landing.css';


function Landing() {

    return (
        <div className="landing-container">
            <div className="row">
                <Header />
            </div>
            <div className="row">
                <div className="col-sm">
                <p>One of three columns</p>    
                </div>
                <div className="col-sm">
                <p>One of three columns</p> 
                </div>
                <div className="col-sm">
                <p>One of three columns</p> 
                </div>
            </div>
        </div>

    )
}

export default Landing;
