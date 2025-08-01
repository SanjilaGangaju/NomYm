import React, { useEffect, useState } from 'react'
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
const MealsDisplay = ({isdarkOn, isSearching, setisSearching, inputValue, meals, setmeals}) => {
    
    const [area, setArea] = useState("american");
    const navigate = useNavigate();
   useEffect(() => {
    if (isSearching) return;
     const fetchDataApi = async()=>{
           const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
           const data = await response.json();
           setmeals(data.meals);

     }
     fetchDataApi();
   
    
   }, [area, isSearching])
  
  
   const randomMeal = async()=>{
           const response = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
           const data = await response.json();
         
           setmeals(data.meals);

     }
   const handleSurpriseMe = ()=>{
        randomMeal();
    }
      
    
  return (
    <div style={{ backgroundColor: isdarkOn?"#04030F":"#fff", color: isdarkOn&&"black"}} className='flex px-10 flex-col items-center justify-center gap-5 py-2'>
       <div className='bg-lime-50 overflow-hidden rounded-xl flex  items-center justify-center h-60 '>
        <h1 className='text-3xl pl-5 font-serif' data-aos="fade-right">Explore <span className='text-yellow-300'>Delicious</span> Recipes From All Around The World With NomYumm!</h1>
          <div>
          <img className='outline-none object-top-center border-none' data-aos="fade-left" src="src\components\hero-image2.png"></img>

          </div>
       </div>
        
        <div className='meal-class-list flex flex-col gap-5'>
           <h2 className='text-xl opacity-70 text-center  font-bold' style={{color:isdarkOn?"white":"black"}}>Search By Your Area</h2>
           <div className='flex gap-4 items-end justify-center'>
            <button className="bg-lime-100 border border-yellow-50 px-4 py-1 text-xs  font-serif rounded-full hover:bg-lime-200" onClick={()=>{setArea("american"); setisSearching(false);}}>American</button>
            <button className="bg-lime-100 border border-yellow-50 px-4 py-1 text-xs  font-serif rounded-full hover:bg-lime-200" onClick={()=>setArea("canadian")}>Canadian</button>
            <button className="bg-lime-100 border border-yellow-50 px-4 py-1 text-xs  font-serif rounded-full hover:bg-lime-200" onClick={()=>setArea("italian")}>Italian</button>
            <button className="bg-lime-100 border border-yellow-50 px-4 py-1 text-xs  font-serif rounded-full hover:bg-lime-200" onClick={()=>setArea("indian")}>Indian</button>
            <button className="bg-lime-100 border border-yellow-50 px-4 py-1 text-xs  font-serif rounded-full hover:bg-lime-200" onClick={()=>setArea("british")}>British</button>
            <button className="bg-lime-100 border border-yellow-50 px-4 py-1 text-xs  font-serif rounded-full hover:bg-lime-200" onClick={()=>setArea("japanese")}>Japanese</button>
            {/* <button className="bg-lime-100 border border-yellow-50 px-4 py-1 text-xs font-serif rounded-full hover:bg-lime-200" onClick={()=>{
              handleSurpriseMe();
              setisSearching(false);}}></button> */}
    

          </div>
        <div className='p-3 text-black font-semibold text-center grid grid-cols-3 gap-10 mt-6'>
           
           {meals.length>0? meals.map(meal=><div className='max-w-60 grid gap-1 rounded-xl border border-none bg-lime-50  capitalize overflow-hidden' key={meal.idMeal}>
               <div className='text-black rounded'><img className="object-cover rounded" src={meal.strMealThumb}></img></div>
               <p className='px-3 font-bold opacity-70'>{meal.strMeal}</p>
              <div className='pb-5 flex items-center justify-center'>
                  <Link className='bg-yellow-200 w-1/3 py-1 text-center text-xs opacity-70 hover:opacity-100 rounded-full' to ={`recipe/${meal.idMeal}`}>View Details</Link>

              </div>
            </div>):<div className="flex items-center m-auto justify-center text-2xl "><p className='text-center font-semibold opacity-70'>Couldnot Find the Dish You are Looking For</p></div>}
        </div>
        </div>
        
    </div>
  )
}

export default MealsDisplay