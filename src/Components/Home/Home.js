import React, { useState, useEffect } from 'react';
import Country from '../Country/Country';

const Home = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        const url = 'https://restcountries.eu/rest/v2/all';
        fetch(url)
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <h1>Homepage</h1>
            <h3>Total : {countries.length}</h3>
            {
                countries.map(country => <Country country={country}></Country>)
            }
        </div>
    );
};

export default Home;