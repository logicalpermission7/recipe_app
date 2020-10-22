import React, {useEffect,useState} from 'react';

import './App.css';

function App() {
const APP_ID = '491aeee4';
const APP_KEY = '2bf4c870d2bf80bb696861877715ceca';


useEffect(() =>{
  getRecipes();
}, []);


const getRecipes = async () =>{
  const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
  const data = await response.json();
  console.log(data);
}


  return (
    <div className="App">
      <form className='search-form'>
        <input className='search-bar' type='text'></input>
        <button className='search-button' type='submit'>Search</button>

      </form>
    </div>
  );
}

export default App;
