import React, {useEffect, useState} from 'react';
// import all components below
import './App.css';
import Recipe from './components/Recipe';

function App() {
const APP_ID = '2d3f5036';
const APP_KEY = '1ed302aa004c52c61e5a10d0155cf00d';
const [recipes, setRecipes] = useState([]);

// This useEffect allows request to only happen once. If the second argument array is empty then it will only run once.
useEffect(() =>{
  getRecipes();
},[]);

// An arrow function that makes a asyncraniz call retrieving data from edamam site, then converts it to jason.
const getRecipes = async () =>{
  const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);
  
}


  return (
    <div className="App">
      <form className='search-form'>
        <input className='search-bar' type='text'></input>
        <button className='search-button' type='submit'>Search</button>
        </form>
        {recipes.map(recipe => (
          <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image}/>
        ))}
    </div>
  );
}

export default App;
