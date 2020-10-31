const URL = "http://localhost:3001/api/v1/cities";

class CityModel {
    static getCities() {
        return fetch(`${URL}/geodb`, {
        method: "GET",
        // here we send the token as Bearer Token
        headers: { authorization: `Bearer ${localStorage.uid}` },
        }).then((response) => response.json());
    }
}

export default CityModel;