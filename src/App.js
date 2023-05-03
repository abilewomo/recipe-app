import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { RecipeAPI } from './apis/RecipeAPI'
import Categories from './components/Categories'
import Category from './pages/Category'
import Recipe from './pages/Recipe'
import Main from './pages/Main'
import Nav from './components/Nav'

export default function App() {
 const  [category, setCategory] = useState([])
 const  [recipe, setRecipe] = useState([])
 const [formData, setFormData] = useState({
  searchfield:  "",
})
useEffect(() => {
  RecipeAPI.getcategories().then((categories) => {
    // response handling
    setCategory(categories)
  })
}, [])

const handleChange = (event) => {
  //use the event object to detect key and value to update
  setFormData({ ...formData, [event.target.name]: event.target.value });
}
const handleSubmit = (event) => {
  //prevent page from refreshing on form submission
  event.preventDefault()
  //pass the search term to moviesearch prop, which is apps getMovie function
  RecipeAPI.getRecipe(formData.searchfield).then((recipe) => {
      // response handling
      setRecipe(recipe)
    })


  
}
useEffect(() => {
  RecipeAPI.getRandomRecipe().then((recipe) => {
    // response handling
    setRecipe(recipe)
  })
}, []) 




  return (
    <div className="App">
      <Nav />
      <form onSubmit={handleSubmit} onChange={handleChange} value={formData.searchterm}>
                <input type="text" name="searchfield" />
                <input type="submit" value = "Search" />
        </form>
      <Routes>
        <Route path="/" element={<Main recipe = {recipe}/>}/>
        <Route path="/categories" element={<Categories categories = {category}/>}/>
        <Route path="/categories/:name" element={<Category getrecipe = {RecipeAPI.getRecipe} />}/>
        <Route path="/recipes" element={<Recipe/>}/>
        <Route path="/recipes/:recipe" element={<Recipe/>}/>
      </Routes>
    </div>
  )
}
