import React, { useEffect, useState } from 'react';

const Weatherapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState('Kathmandu');

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/find?q=kathmandu&units=metric&appid=c0679a48cef8047ed9698495ddce46c4`;
      const response = await fetch(url);
      const resJson = await response.json();
      // console.log(resJson);
      // Data is store on it
      setCity(resJson);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <h1>OpenWeather</h1>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputFeild"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
      </div>

      <div className="info">
        <h5 className="time"> {search}9:54pm, Apr 30</h5>
        <h1 className="location">{city}, NP </h1>
        <h3> Feels like 16°C. Broken clouds. Light air</h3>
      </div>
    </>
  );
};

export default Weatherapp;




