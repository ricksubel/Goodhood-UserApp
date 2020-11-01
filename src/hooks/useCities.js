import { useState, useEffect } from "react";
import CityModel from "../models/CityModel";

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