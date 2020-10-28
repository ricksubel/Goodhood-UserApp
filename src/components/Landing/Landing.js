import React from 'react';
import Header from './Header/Header';
import './Landing.css';


function Landing() {

    return (
        <div className="container-fluid">
            <div className="row">
                <Header />
            </div>
            <div className="row">
                <div className="col-4 align-self-right">
                    <div className="dot">Option1</div>
                </div>
                <div className="col-4 align-self-center">
                    <div className="dot">Option1</div>
                </div>
                <div className="col-4 align-self-left">
                    <div className="dot">Option1</div>
                </div>
            </div>
        </div>

    )
}

export default Landing;
