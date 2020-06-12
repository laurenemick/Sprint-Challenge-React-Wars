import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import './App.css';
import axios from 'axios'
import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [charactersArr, setCharactersArr] = useState([])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.py4e.com/api/people')
      .then(res => {
        console.log(res.data.results)
        setCharactersArr(res.data.results)
      })
      .catch(err => {
        debugger
      })
  }, []) 

  return (
    <div className="App">
      <StyledHeading className="Header">React Wars</StyledHeading>
      <div> 
        <Character characters={charactersArr} />
      </div>
    </div>
  )
}

const StyledHeading = styled.h1`
  color: white;
  letter-spacing: 2px;
  font-family: 'Alfa Slab One', cursive;
  font-size: 2rem;
  text-transform: uppercase;
`;

export default App;
