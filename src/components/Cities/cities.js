import React from 'react';
import { Container } from 'react-bootstrap';

// TODO do I even need this???

const Cities = (props) => {
    function cityList(cities) {
        return cities.map(city => {
            return <li key={city._id} city={city} />
        })
    }

    return (
        <Container>
            {cityList(props.data)}
        </Container>
    )
}

export default Cities;
