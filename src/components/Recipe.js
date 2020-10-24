import React from 'react';

function Recipe({title,ingredients,image}){
    return(
        <div>
            <h1>{title}</h1>
            <p>{ingredients}</p>
            <img src={image} alt=''></img>
        </div>
    )
}
export default Recipe;