import React, {useState , useEffect} from 'react'
import Axios from 'axios'

const Planets = props => {
    const {planet} = props;
    return(
        <div>
            <h4>Secrets of the Galaxies:</h4>
            <h5>{planet.name}</h5>
            <h6>Climate: {planet.climate}</h6>
            <h6>Terrain: {planet.terrain}</h6>
            <h6>Gravity: {planet.gravity}</h6>
            <h6>Population: {planet.population}</h6>
        </div>
    )
}

export default Planets;