import React, { Component } from 'react';

class CreatePost extends Component {

    constructor(props) {
        super(props);

        this.onChangeCreatePostType = this.onChangeCreatePostType.bind(this);
        this.onChangeCreatePostCity = this.onChangeCreatePostCity.bind(this);
        this.onChangeCreatePostTitle = this.onChangeCreatePostTitle.bind(this);
        this.onChangeCreatePostDescription = this.onChangeCreatePostDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {

            CreatePost_type: '',
            CreatePost_city: '',
            CreatePost_title: '',
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

    onChangeCreatePostTitle(e) {
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
        console.log(`CreatePost Title: ${this.state.CreatePost_title}`);
        console.log(`CreatePost Description: ${this.state.CreatePost_description}`);
        
        this.setState({
            CreatePost_type: '',
            CreatePost_city: '',
            CreatePost_title: '',
            CreatePost_description: '',
        })
    }

    render() {
        return (
            <div className="container p-3">
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
                                        checked={this.state.CreatePost_type==='General Suggestion'} 
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
                            <label>Title: </label>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.CreatePost_title}
                                    onChange={this.onChangeCreatePostTitle}
                                    />
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
                            <input type="submit" value="Post" className="btn bt-sm btn-primary" />
                        </div>
                    </form>
            </div>
        )
    }
}

export default CreatePost;

// import React, { useState } from "react";
// import PostModel from "../models/PostModel";

// function NewPost(props) {
//     const [type, setType] = useState("");
//     const [city, setCity] = useState("");
//     const [description, setDescription] = useState("");

//     function handleSubmit(event) {
//         event.preventDefault();

//         PostModel.create({ type, city, description }).then(
//         (data) => {
//             props.history.push("/Posts");
//         }
//         );
//     }

// return (
//     <div>
//         <h2>New Post</h2>
//         <form onSubmit={handleSubmit}>
//             <div className='form-input'>
//             <label htmlFor='type'>type</label>
//             <input
//                 type='text'
//                 name='type'
//                 onChange={(e) => setType(e.target.value)}
//                 value={type}
//             />
//             </div>
//             <div className='form-input'>
//             <label htmlFor='city'>city</label>
//             <input
//                 type='text'
//                 name='city'
//                 onChange={(e) => setCity(e.target.value)}
//                 value={city}
//             />
//             </div>
//             <div className='form-input'>
//             <label htmlFor='description'>Image URL</label>
//             <input
//                 type='text'
//                 name='description'
//                 onChange={(e) => setDescription(e.target.value)}
//                 value={description}
//             />
//             </div>

//             <input type='submit' value='Save!' />
//         </form>
//         </div>
//     );
// }

// export default NewPost;
