import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { RecipeAPI } from './apis/RecipeAPI'
import Categories from './components/Categories'
import Category from './pages/Category'
import Home from './pages/Home'
import Nav from './components/Nav'

export default function App() {
 const  [category, setCategory] = useState([])
 const  [recipe, setRecipe] = useState([])

useEffect(() => {
  RecipeAPI.getcategories().then((categories) => {
    // response handling
    setCategory(categories)
  })
}, [])


  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home getRecipe = {RecipeAPI.getRecipe} getRandomRecipe = {RecipeAPI.getRandomRecipe}/>}/>
        <Route path="/categories" element={<Categories categories = {category}/>}/>
        <Route path="/categories/:name" element={<Category getrecipe = {RecipeAPI.getRecipe} />}/>
      </Routes>
    </div>
  )
}
