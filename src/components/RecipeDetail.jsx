import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const RecipeDetail = ({isdarkOn}) => {
    const {id} = useParams();
    const [recipeDetail, setrecipeDetail] = useState([]);
    

    function getYouTubeEmbedUrl(youtubeUrl) {
      const url = new URL(youtubeUrl);
      const videoId = url.searchParams.get("v");
      return `https://www.youtube.com/embed/${videoId}`;
    }
    



    useEffect(()=>{
     const recipeOfMeal = async()=>{
     const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
     const data = await response.json();
     setrecipeDetail(data.meals);
     
     
     
    }
    recipeOfMeal();
    },[recipeDetail])
    
    
 
   

  
  return (

    <div style={{backgroundColor:isdarkOn?"#04030F":"#fff", color:isdarkOn?"white":"black"}}>{recipeDetail.map(item=>
    <div key={item.idMeal} className='px-4 py-2  flex flex-col items-center justify-center gap-3' >
      <div className='w-1/1 rounded-x h-60 overflow-hidden '><img className="object-fill w-1/1 opacity-90" src={item.strMealThumb}></img></div>
      <div className='flex flex-col items-center justify-center gap-2 '>
        <div className='flex flex-col gap-2'>
           <h2 className='text-2xl font-bold '>{item.strMeal}</h2>
      <div className='flex gap-2'><span className="rounded-full px-2  bg-lime-200">{item.strCategory}</span><span className="rounded-full px-2  bg-lime-200">{item.strArea}</span></div>
      <div className='text-justify'><p className='text-l underline font-semibold opacity-80'>Instructions:</p> {item.strInstructions}</div>
      {/* <div><p className='font-semibold opacity-80'>Tags:</p><div className='mt-2'>{item.strTags.split(",").map(items=><span className='bg-yellow-200 text-xs px-2 py-1 text-center rounded mr-2'>{items}</span>)}</div></div> */}
        </div>
       
       <div className='w-full'><iframe width="100%" height="315" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen src={item.strYoutube&&getYouTubeEmbedUrl(item.strYoutube)}></iframe></div>
       </div>
      
    </div>)}</div>
  )
}

export default RecipeDetail