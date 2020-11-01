import axios from 'axios';

const URL = "http://localhost:3001/api/v1/cities";

class CityModel {
    static all = () => {
        return axios.get(URL).then(response => response.json());
    }

    static show = (cityID) => {
        return axios.get(`${URL}/refApi`).then(response => response.data)
    }

    static create = (cityData) => {
        return axios.get(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cityData)
        })
        .then(response => response.json());
    }

    static edit = (cityID, cityData) => {
        return axios.get(`${URL}/${cityId}`, {
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

