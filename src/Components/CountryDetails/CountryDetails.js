import React from 'react';
import { useParams } from 'react-router';

const CountryDetails = () => {
    const { name } = useParams();
    return (
        <div>
            <h2>Country Info: {name}</h2>
        </div>
    );
};

export default CountryDetails;