import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const { name, capital } = props.country;
    return (
        <div>
            <h1>{name}</h1>
            <p>{capital}</p>
            <Link to={`/countries/${name}`}>Details of{name}</Link>
        </div>
    );
};

export default Country;