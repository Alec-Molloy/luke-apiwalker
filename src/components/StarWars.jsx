import React, {useState , useEffect} from 'react'
import Axios from 'axios'
import Planets from './Planets'
import People from './People'
import Nope from './Nope'
import obiwan from './obiwan.jpg'
import { Router, Link, navigate } from "@reach/router";

const StarWars = props => {
    const[jedi,setJedi]= useState(null)
    const[planet, setPlanet]= useState(null)
    
    useEffect(() => {
        Axios.get(`https://swapi.dev/api/${props.search}/${props.id}`)
            .then(res => {
                if(props.search === "people"){
                    setJedi(res.data);
                    setPlanet(null)
                }
                else if(props.search === "planets"){
                    setPlanet(res.data);
                    setJedi(null)
                }
            })
            // .catch(err => console.log(err))
            .catch(err => {
                navigate(`/nope`);
            })
    },[props])

    return(
        <div>
            {
                jedi ? <People jedi={jedi} /> :null
            }
            {
                planet ? <Planets planet={planet} />  :null
            }
        </div>
    )
}

export default StarWars;