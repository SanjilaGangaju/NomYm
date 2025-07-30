import React from 'react'
import { useParams } from 'react-router-dom'
const RecipeDetail = () => {
    // const recipeOfMeal = async(mealId)=>{
    //    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    //   const data = await response.json();
     
    //   setRecipe(data.meals);
    
      
    // }
    const {id} = useParams();
    console.log(id)
  return (

    <div>{id}</div>
  )
}

export default RecipeDetail