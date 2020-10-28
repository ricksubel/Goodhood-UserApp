import React, { Component } from 'react';
import './ForHelp.css';

class ForHelp extends Component {
    // TODO write function for onclick expand for posts
    // state = 
        // conditional for onclick

    render() {
        return (
            <div className="container-fluid">
                    <div className="row fullscreen mt-5">
                        <div className="col-2" style={{ backgroundColor: "aqua"}}>
                            Left Sidebar
                        </div>
                        
                        <div className="col-8">
                            <h3>Let's find you the help you need!</h3>
                                <p className="post text-truncate">
                                    Ornare suspendisse sed nisi lacus sed viverra tellus. Egestas congue quisque egestas diam in arcu. Tincidunt augue interdum velit euismod in. Velit laoreet id donec ultrices tincidunt. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Imperdiet sed euismod nisi porta lorem mollis aliquam.
                                </p>
                                    <hr></hr>
                                <p className="post text-truncate">
                                    Elit eget gravida cum sociis natoque penatibus et. Ut eu sem integer vitae justo eget magna. Risus viverra adipiscing at in tellus. Dictumst quisque sagittis purus sit. Quisque id diam vel quam elementum pulvinar. Risus nullam eget felis eget nunc. Id faucibus nisl tincidunt eget nullam.
                                </p>
                            
                        </div>
                        <div className="col-2" style={{ backgroundColor: "aqua"}}>
                            Right Sidebar
                        </div>
                        
                    </div>
            </div>
        )
    }
}

export default ForHelp;