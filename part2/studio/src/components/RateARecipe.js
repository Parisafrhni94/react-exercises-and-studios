import React from 'react';
let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function GiveRating(props) {
  return (
  
    <h3>{stars[props.rating - 1]}</h3>
  
  );
}

function RateARecipe(props) {
  return (
    <div>
      {props.rating >= 1 && props.rating <= 5 ? <GiveRating rating={props.rating} /> : null}
    </div>
  );
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
