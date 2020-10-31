const URL = "http://localhost:3001/api/v1/users";

class UserModel {
    static show() {
        return fetch(URL, {
        method: "GET",
        // here we send the token as Bearer Token
        headers: { authorization: `Bearer ${localStorage.uid}` },
        }).then((response) => response.json());
    }
}

export default UserModel;