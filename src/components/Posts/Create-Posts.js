import React, { Component } from 'react';

class CreatePost extends Component {

    constructor(props) {
        super(props);

        this.onChangeCreatePostType = this.onChangeCreatePostType.bind(this);
        this.onChangeCreatePostCity = this.onChangeCreatePostCity.bind(this);
        this.onChangeCreatePostDescription = this.onChangeCreatePostDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {

            CreatePost_type: '',
            CreatePost_city: '',
            CreatePost_description: '',
        }
    }


    onChangeCreatePostType(e) {
        this.setState({
            CreatePost_type: e.target.value
        });
    }

    onChangeCreatePostCity(e) {
        this.setState({
            CreatePost_type: e.target.value
        });
    }


    onChangeCreatePostDescription(e) {
        this.setState({
            CreatePost_description: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`CreatePost Type: ${this.state.CreatePost_type}`);
        console.log(`CreatePost City: ${this.state.CreatePost_city}`);
        console.log(`CreatePost Description: ${this.state.CreatePost_description}`);
        
        this.setState({
            CreatePost_type: '',
            CreatePost_city: '',
            CreatePost_description: '',
        })
    }

    render() {
        return (
            <div className="container">
                <div style={{marginTop: 100}}>
                    <h3>Create New Post</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" 
                                        type="radio" 
                                        name="typeOptions" 
                                        id="typeNeed" 
                                        value="Need"
                                        checked={this.state.CreatePost_type==='Needing Help'} 
                                        onChange={this.onChangeCreatePostType}
                                        />
                                <label className="form-check-label">Needing Help</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input  className="form-check-input" 
                                        type="radio" 
                                        name="typeOptions" 
                                        id="typeOffering" 
                                        value="Offering" 
                                        checked={this.state.CreatePost_type==='Offering Help'} 
                                        onChange={this.onChangeCreatePostType}
                                        />
                                <label className="form-check-label">Offering Help</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input  className="form-check-input" 
                                        type="radio" 
                                        name="typeOptions" 
                                        id="typeGeneral" 
                                        value="General" 
                                        checked={this.state.CreatePost_type==='Neighborhood Suggestion'} 
                                        onChange={this.onChangeCreatePostType}
                                        />
                                <label className="form-check-label">Neighborhood Suggestions</label>
                            </div>
                        </div>
                        {/* TODO Dropdown City */}
                        <div class="dropdown show">
                            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                City
                            </a>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a class="dropdown-item" href="">Action</a>
                                <a class="dropdown-item" href="">Another action</a>
                                <a class="dropdown-item" href="">Something else here</a>
                            </div>
                        </div>
                        <div className="form-group"> 
                            <label>Description: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.CreatePost_description}
                                    onChange={this.onChangeCreatePostDescription}
                                    />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Create CreatePost" className="btn bt-sm btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreatePost;
