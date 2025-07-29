import React, { useEffect, useState } from 'react'
import MealRecipe from './mealRecipe';


const MealsDisplay = () => {
    const [meals, setmeals] = useState([]);
    const [area, setArea] = useState("american");
    const [isOn, setisOn] = useState(false);
    const [isSelected, setisSelected] = useState(false);
    const [idSelected, setidSelected] = useState("");
    const [recipe, setRecipe] = useState([]);
   useEffect(() => {
     const fetchDataApi = async()=>{
           const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
           const data = await response.json();
           setmeals(data.meals);

     }
     fetchDataApi();
   
    
   }, [area])
   const randomMeal = async()=>{
           const response = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
           const data = await response.json();
         
           setmeals(data.meals);

     }
    const handleSurpriseMe = ()=>{
        randomMeal();
    }

    const recipeOfMeal = async(mealId)=>{
       const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      const data = await response.json();
     
      setRecipe(data.meals);
    
      
    }
   const handleMealClick= (event)=>{
      const  mealId= event.target.id;
  
      setisSelected(true);
      setidSelected(mealId);
      recipeOfMeal(mealId);


   }
    
   
    
    
  return (
    <div style={{backgroundColor: isOn?"black":"white"}} className='flex px-6 flex-col items-center justify-center py-6'>
        <button  onClick={()=>{setisOn(!isOn)}} style={{backgroundColor: isOn?"white":"black",
        color: isOn?"black":"white"}} className='bg-red-200 rounded py-1 px-2'>Dark Mode: {isOn?"ON": "OFF"}</button>
        <h1 className='text-3xl font-semibold font-nerko-one'>NomYm: Food Recipe At Your hand</h1>
        {!isSelected?(
        <div className='meal-class-list'>
           <div className='flex gap-2'>
            <button className="rounded bg-amber-600 py-1 px-2" onClick={()=>setArea("american")}>American</button>
            <button className="rounded bg-amber-600 py-1 px-2" onClick={()=>setArea("canadian")}>Canadian</button>
            <button className="rounded bg-amber-600 py-1 px-2" onClick={()=>setArea("italian")}>Italian</button>
            <button className="rounded bg-amber-600 py-1 px-2" onClick={()=>setArea("indian")}>Indian</button>
            <button className="rounded bg-amber-600 py-1 px-2" onClick={()=>setArea("british")}>British</button>
            <button className="rounded bg-amber-600 py-1 px-2" onClick={()=>setArea("japanese")}>Japanese</button>
            <button className="rounded bg-amber-600 py-1 px-2" onClick={handleSurpriseMe}>Suprise Me</button>


            </div>
        <div className='bg-amber-900  rounded p-6 text-black font-semibold text-center grid grid-cols-4 gap-6 mt-6'>
           
            {meals.map(meal=><div className='border border-yellow-200 bg-white rounded p-2' key={meal.idMeal}>
              <div className='max-w-50 flex flex-col items-center justify-center text-black'><img className="rounded"src={meal.strMealThumb}></img></div>
              <p className='py-2'>{meal.strMeal}</p>
              <button id={meal.idMeal} onClick={(e)=>handleMealClick(e)} className='bg-green-200 px-2 py-1 rounded'>View Details</button>
            </div>)}
        </div>
        </div>):(
           <MealRecipe recipe={recipe} ></MealRecipe>
        )}
        
    </div>
  )
}

export default MealsDisplay