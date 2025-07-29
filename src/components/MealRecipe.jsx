import React from 'react'

const MealRecipe = ({recipe}) => {

  console.log(recipe);

    
   
    
    
  return (
    <>
    <h1>Recipe</h1>
     <div>{recipe.map(item =><div key={item.idMeal}>
        <div>
            <img src={item.strMealThumb}></img>
        </div>
        <div>
            <span>{item.strMeal}</span>&nbsp;Category: <span>{item.strCategory}</span>
            {/* <p>{item.strTags.split(',').map((word, index)=><span key={index}>{word.trim()}</span>)}</p> */}
            <p>Area: {item.strArea}</p>
            <p>Instructions:  {item.strInstructions}</p>
            <p>Ingredients:{item.strIngredient1}</p>
            <p>Source: {item.strSource}</p>

        </div>
     </div>)}</div>
    
    </>
   
  )
}

export default MealRecipe