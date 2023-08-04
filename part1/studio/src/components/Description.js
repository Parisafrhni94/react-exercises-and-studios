import styles from "./Description.module.css";
import React from "react";

function RecipeAuthor() {
  let authorLink =
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.veranda.com%2Ffood-recipes%2Fa38389386%2Fbest-california-restaurants%2F&psig=AOvVaw1ANd8mnLuKGJnBZYmBRcUN&ust=1691195151926000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMjrkIbfwYADFQAAAAAdAAAAABAD";
  let authorPhoto =
    "https://thecozycook.com/wp-content/uploads/2022/04/Lasagna-Recipe.jpg";
  let authorName = "Parisa";
  return (
    <div className={styles.recipeAuthorBlock}>
      <img
        src={authorPhoto}
        alt="Reasonable alt text"
        className={styles.imageUpdates}
      />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink}>Blog name</a>
      </div>
    </div>
  );
}
class RecipeDescription extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>Recipe Title</h1>
          <p>Short recipe description</p>
        </div>
        <RecipeAuthor />
      </div>
    );
  }
}
export default RecipeDescription;