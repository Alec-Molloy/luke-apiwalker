import React, { useState } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Router, Link, navigate } from "@reach/router";
import StarWars from './components/StarWars';
import Nope from './components/Nope'

function App() {
  const[search,setSearch] = useState({
    search:"people",
    id:0
  })

  const handleInput = (e) =>{
    setSearch({
      ...search,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${search.search}/${search.id}`)
  }
  
  return (
    <div className="card col-3 mx-auto">
      <h5>Welcome Young Padawan</h5>
      <div>
        <h6>Search For:</h6>
        <form onSubmit={handleSubmit}>
          <select className="col-12" onChange={handleInput} name="search">
            <option value="people">People</option>
            <option value="planets">Planets</option>
          </select>
          <h6>id:</h6>
          <input type="number" name="id" value={search.id} onChange={handleInput} className="col-12"/><br />
          <input type="submit" className="btn btn-dark col-12" value="Awaken The Force"/>
        </form>
      </div>
      <Router>
        <StarWars path="/:search/:id" />
        <Nope path="/nope" />
      </Router>
    </div>
  );
}

export default App;
