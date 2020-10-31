import axios from 'axios';

const URL = "http://localhost:3001/api/v1/cities";

class CityModel {
    static getCities = () => {
        return axios.get(`${URL}/getCity`).then(response => response.data)
    }
}
export default CityModel;
