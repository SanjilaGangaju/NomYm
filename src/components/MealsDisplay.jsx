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
    <div style={{ backgroundColor: isdarkOn?"#04030F":"#fff", color: isdarkOn&&"black"}} className='flex px-4 pb-10 md:px-8 flex-col items-center justify-center gap-5 py-1'>
       <div className='bg-lime-50 overflow-hidden rounded-xl flex  flex-col md:flex-row md:gap-2  justify-center h-70 gap-1'>
        <h1 className='text-[1.2rem] md:m-auto md:text-center md:text-[1.9rem] md:px-7 px-4 pt-4 text-left font-serif' data-aos="zoom-in">Explore <span className='text-yellow-300 text-[1.2em] md:-text-[1.4rem'>Delicious</span> Recipes From All Around The World With NomYumm!</h1>
          <div className='w-full h-1/2'>
          <img className='w-full object-cover center' src="src\components\hero-image2.png" data-aos="zoom-in"></img>

          </div>
       </div>
        
        <div className='meal-class-list flex flex-col gap-5'>
           <h2 className='text-xl opacity-70 text-center  font-bold' style={{color:isdarkOn?"white":"black"}}>Search By Your Area</h2>
           <div className='flex flex-wrap gap-4 items-center justify-center'>
            <button className="bg-lime-100 border border-yellow-50 px-4 py-1 text-xs  font-serif rounded-full hover:bg-lime-200" onClick={()=>{setArea("american"); setisSearching(false);}}>American</button>
            <button className="bg-lime-100 border border-yellow-50 px-4 py-1 text-xs  font-serif rounded-full hover:bg-lime-200" onClick={()=>setArea("canadian")}>Canadian</button>
            <button className="bg-lime-100 border border-yellow-50 px-4 py-1 text-xs  font-serif rounded-full hover:bg-lime-200" onClick={()=>setArea("italian")}>Italian</button>
            <button className="bg-lime-100 border border-yellow-50 px-4 py-1 text-xs  font-serif rounded-full hover:bg-lime-200" onClick={()=>setArea("indian")}>Indian</button>
            <button className="bg-lime-100 border border-yellow-50 px-4 py-1 text-xs  font-serif rounded-full hover:bg-lime-200" onClick={()=>setArea("british")}>British</button>
            <button className="bg-lime-100 border border-yellow-50 px-4 py-1 text-xs  font-serif rounded-full hover:bg-lime-200" onClick={()=>setArea("japanese")}>Japanese</button>
            <button className="bg-lime-100 border border-yellow-50 px-4 py-1 text-xs font-serif rounded-full hover:bg-lime-200" onClick={()=>{
              handleSurpriseMe();
              setisSearching(false);}}>Surprise Me</button>
    

          </div>
        <div className='text-black font-semibold text-center grid-cols-1 items-center justify-center grid  md:grid-cols-3 md:gap-10 gap-10 mt-6'>
           
           {meals.length>0? meals.map(meal=><div className='m-auto grid gap-2 rounded-xl border border-none outline-none bg-lime-50  capitalize overflow-hidden' key={meal.idMeal}>
               <div className='text-black rounded'><img className="w-full object-cover" src={meal.strMealThumb}></img></div>
               <p className='px-3 font-bold opacity-70'>{meal.strMeal}</p>
              <div className='pb-5 flex items-center justify-center'>
                  <Link className='bg-yellow-200 w-1/2 py-1 px-2 text-center text-xs opacity-90 hover:opacity-100 rounded' to ={`recipe/${meal.idMeal}`}>View Details</Link>

              </div>
            </div>):<div className="w-1/1 md:col-span-3 md:m-auto md:py-4 flex items-center m-auto justify-center md:text-center md:mx-10 text-2xl "><p className='text-center text-xl font-semibold opacity-70' style={{color: isdarkOn?"white":"black"}}>Couldnot Find the Dish You are Looking For</p></div>}
        </div>
        </div>
        
    </div>
  )
}

export default MealsDisplay