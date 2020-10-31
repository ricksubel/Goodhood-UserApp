import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

import './Landing.css';


function Landing() {

    return (
        <div className="container-fluid">
            <div className="row text-center">
                <Header />
            </div>
            <div className="container d-flex align-content-center mt-5">
                    <div className="col-sm">
                        <span className="dot">
                            <p className="my-auto">Option1</p>
                        </span>
                    </div>
                    <div className="col-sm">
                        <span className="dot">
                            <p className="my-auto">Option2</p>
                        </span>
                    </div>
                    <div className="col-sm">
                        <span className="dot">
                            <p className="my-auto">Option3</p>
                        </span>
                    </div>
            </div>

            {/* TODO fix image size */}
            {/* <div className="row-fluid">
                <Footer />
            </div> */}
        </div>

    )
}

export default Landing;
