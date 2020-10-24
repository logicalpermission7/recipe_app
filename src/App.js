import React, {useEffect, useState} from 'react';
// import all components below
import './App.css';
import Recipe from './components/Recipe';

function App() {
const APP_ID = '2d3f5036';
const APP_KEY = '1ed302aa004c52c61e5a10d0155cf00d';
const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState('');
//Query will only update after the submit button is clicked.
const [query, setQuery] = useState('chicken');
// This useEffect allows request to only happen once. If the second argument array is empty then it will only run once.
useEffect(() =>{
  getRecipes();
},[query]);

// An arrow function that makes a asyncraniz call retrieving data from edamam site, then converts it to jason.
const getRecipes = async () =>{
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);
  
}

const updateSearch = e =>{
  setSearch(e.target.value);
}

const getSearch = e =>{
  //preventDefault stops the page from refrshing.
  e.preventDefault();
  setQuery(search);
}

  return (
    <div className="App">
      <form onSubmit={getSearch} className='search-form'>
        <input className='search-bar' type='text' value={search} onChange={updateSearch}></input>
        <button className='search-button' type='submit'>Search</button>
        </form>
        {recipes.map(recipe => (
          <Recipe key={recipe.recipe.label}title={recipe.recipe.label} ingredients={recipe.recipe.ingredientLines} image={recipe.recipe.image}/>
        ))}
    </div>
  );
}

export default App;
