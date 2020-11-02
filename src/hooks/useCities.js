import { useState, useEffect } from "react";
import CityModel from "../models/CityModel";

// let cities = require('./cityData.json');

// // Optionally remap fields
// cities = cities.map(c => ({ name: c.city, state: c.state }));

// const groupedCities = {};
// cities.forEach(c => {
//     const stateName = c.state.replace(' ', '');
//     if (!groupedCities[stateName]) {
//         groupedCities[stateName] = [];
//     }

//     groupedCities[stateName].push(c);
// });


function useCities(cityId) {
    const [cities, setCities] = useState([]);

    function fetchCities(id) {
        if (id) {
        CityModel.show(id).then((data) => {
            setCities(data.city);
        });
        } else {
        CityModel.all().then((data) => {
            setCities(data.city);
        });
        }
    }

    useEffect(
        function () {
        fetchCities(cityId);
        },
        [cityId]
    );

    return [cities, fetchCities];
}

export default useCities;
