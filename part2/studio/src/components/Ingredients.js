import React from 'react';
import recipedata from "./recipe.json";
function IngredientList() {
  return (
    <div>
      <h3>Ingredients</h3>
      {recipedata.map((data) => (
        <div key={data.name}>
          {data.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </div>
      ))}
    </div>
  );
}

export default IngredientList;