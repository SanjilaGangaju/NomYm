import React, { useEffect, useState } from 'react'

const MealsDisplay = () => {
    const [meals, setmeals] = useState([]);
    const [area, setArea] = useState("american");
    const [isOn, setisOn] = useState(false);
    

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
    
   
    
    
  return (
    <div style={{backgroundColor: isOn?"black":"white"}} className='flex px-6 flex-col items-center justify-center py-6'>
        <button  onClick={()=>{setisOn(!isOn)}} style={{backgroundColor: isOn?"white":"black",
        color: isOn?"black":"white"}} className='bg-red-200 rounded py-1 px-2'>Dark Mode: {isOn?"ON": "OFF"}</button>
        <h1 className='text-3xl font-semibold font-nerko-one'>NomYm: Food Recipe At Your hand</h1>
         <div className='flex gap-2'>
            <button class="rounded bg-amber-600 py-1 px-2" onClick={()=>setArea("american")}>American</button>
            <button class="rounded bg-amber-600 py-1 px-2" onClick={()=>setArea("canadian")}>Canadian</button>
            <button class="rounded bg-amber-600 py-1 px-2" onClick={()=>setArea("italian")}>Italian</button>
            <button class="rounded bg-amber-600 py-1 px-2" onClick={()=>setArea("indian")}>Indian</button>
            <button class="rounded bg-amber-600 py-1 px-2" onClick={()=>setArea("british")}>British</button>
            <button class="rounded bg-amber-600 py-1 px-2" onClick={()=>setArea("japanese")}>Japanese</button>
            <button class="rounded bg-amber-600 py-1 px-2" onClick={handleSurpriseMe}>Suprise Me</button>


            </div>
        <div className='bg-amber-900  rounded p-6 text-black font-semibold text-center grid grid-cols-4 gap-6 mt-6'>
           
            {meals.map(meal=><div className='border border-yellow-200 bg-white rounded p-2' key={meal.idMeal}>
              <div className='max-w-50 text-black'><img className="rounded"src={meal.strMealThumb}></img></div>
              <p className='py-2'>{meal.strMeal}</p>
            </div>)}
        </div>
    </div>
  )
}

export default MealsDisplay