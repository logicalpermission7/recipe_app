import React from 'react';

function Recipe({title,ingredients,image}){
    return(
        <div>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <img src={image} alt=''></img>
        </div>
    )
}
export default Recipe;