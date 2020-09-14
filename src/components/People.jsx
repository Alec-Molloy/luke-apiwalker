import React, {useState , useEffect} from 'react'
import Axios from 'axios'

const People = props => {
    const {jedi} = props;
    return(
        <div className="card col-12">
            <h4>Secrets of the Jedi:</h4>
            <h5>{jedi.name}</h5>
            <h6>Height: {jedi.height}cm</h6>
            <h6>Mass: {jedi.mass}kg</h6>
            <h6>Hair Color: {jedi.hair_color}</h6>
            <h6>Skin Color: {jedi.skin_color}</h6>
        </div>
    )
}

export default People;