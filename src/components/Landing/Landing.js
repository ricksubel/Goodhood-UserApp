import React from 'react';
import Header from './Header/Header';
import './Landing.css';


function Landing() {

    return (
        <div className="container-fluid">
            <div className="row text-center">
                <Header />
            </div>
            <div className="container d-flex justify-content-center text-center mt-5">
                <div className="col-4 align-self-center">
                    <span className="dot">
                        <p className=" my-auto">Option1</p>
                    </span>
                </div>
                <div className="col-4">
                    <span className="dot">
                        <p>Option2</p>
                    </span>
                </div>
                <div className="col-4">
                    <span className="dot">
                        <p>Option3</p>
                    </span>
                </div>
            </div>
        </div>

    )
}

export default Landing;
