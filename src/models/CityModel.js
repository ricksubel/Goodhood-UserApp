const URL = "http://localhost:3001/api/v1/cities";

class CityModel {
    static all = () => {
        return fetch(URL).then(response => response.json());
    }

    static show = (cityId) => {
        return fetch(`${URL}/cityId`).then(response => response.data)
    }

    static create = (cityData) => {
        return fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cityData)
        })
        .then(response => response.json());
    }

    static edit = (cityId, cityData) => {
        return fetch(`${URL}/${cityId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cityData)
        })
        .then(response => response.json());
    }

}

export default CityModel;

