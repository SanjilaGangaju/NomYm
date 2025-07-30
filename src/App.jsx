import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MealsDisplay from './components/MealsDisplay'
import { useState } from 'react';

import Navbar from './components/Navbar';
import About from './components/About';
import Blog from './components/blog';
import MealRecipe from './components/mealRecipe';
import RecipeDetail from './components/RecipeDetail';
const App = () => {
  const [isdarkOn, setisdarkOn] = useState(false);
  return (
    <div>
      <Router>
        <Navbar setisdarkOn={setisdarkOn} isdarkOn={isdarkOn}></Navbar>
        <Routes>
          <Route path="/" element={<MealsDisplay isdarkOn={isdarkOn}></MealsDisplay>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/blog" element={<Blog></Blog>}></Route>
         <Route path="/recipe/:id" element={<RecipeDetail></RecipeDetail>}></Route>
        </Routes>
      </Router>
    
      
    </div>
  )
}

export default App
