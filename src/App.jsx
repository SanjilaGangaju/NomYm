import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MealsDisplay from './components/MealsDisplay'
import { useState } from 'react';
import './components/index.css';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Blog from '../components/Blog';
import MealRecipe from './components/mealRecipe';
import RecipeDetail from './components/RecipeDetail';

const App = () => {
  const [isdarkOn, setisdarkOn] = useState(false);
  const [inputValue, setinputValue] = useState("");
  const [meals, setmeals] = useState([]);
  const [isSearching, setisSearching] = useState(false);

   
   const fetchDataApi = async(inputValue)=>{
          
           const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
         
           const data = await response.json();
           
           setmeals(data.meals || []);
           setisSearching(true);

     }
    
  const handleSubmit=(e)=>{
    e.preventDefault();
     if(!inputValue.trim())return;
    fetchDataApi(inputValue.trim());
    setinputValue("");
    

  }
  return (
    <div>
      <Router>
        <Navbar setisdarkOn={setisdarkOn} inputValue={inputValue} setinputValue={setinputValue} handleSubmit={handleSubmit} isdarkOn={isdarkOn}></Navbar>
        <Routes>
          <Route path="/" element={<MealsDisplay isdarkOn={isdarkOn} isSearching={isSearching} setisSearching={setisSearching} meals={meals} setmeals={setmeals} inputValue={inputValue}></MealsDisplay>}></Route>
          <Route path="/about" element={<About isdarkOn={isdarkOn}></About>}></Route>
          <Route path="/blog" element={<Blog isdarkOn={isdarkOn}></Blog>}></Route>
         <Route path="/recipe/:id" element={<RecipeDetail isdarkOn={isdarkOn} inputValue={inputValue}></RecipeDetail>}></Route>
        </Routes>
      </Router>
    
      
    </div>
  )
}

export default App
