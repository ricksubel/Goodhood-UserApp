const URL = 'http://localhost:3001/api/v1/posts'

class PostModel {
    static all = () => {
        return fetch(URL, {
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${localStorage.uid}`,
        },}
        ).then(response => response.json());
    }

    
    static show = (postId) => {
        return fetch(`${URL}/${postId}`, {
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${localStorage.uid}`,
            },}
        ).then(response => response.json());
    }


    static create = (postData) => {
        return fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${localStorage.uid}`,
            },
            body: JSON.stringify(postData)
        })
        .then(response => response.json());
    }


    static edit = (postId, postData) => {
        return fetch(`${URL}/${postId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${localStorage.uid}`,
            },
            body: JSON.stringify(postData)
        })
        .then(response => response.json());
    }
}

export default PostModel;
