import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

const Planets = (props) => {

    const [planetList, setPlanetList] = useState([]);

    const {params} = useParams();
    useEffect(() => {
      axios.get('https://swapi.dev/api/planets/')
      .then((response) => {
        setPlanetList(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      })
    }, []);
  
    return (
      <div>
      </div>
    )
    }

export default Planets;