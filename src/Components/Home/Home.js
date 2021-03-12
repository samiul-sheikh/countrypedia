import React, { useState, useEffect } from 'react';

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
            <h1>Country Information</h1>
            <h3>Total : {countries.length}</h3>
        </div>
    );
};

export default Home;