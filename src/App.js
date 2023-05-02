import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Form from './components/Form'
import Category from './components/Categories'
import { RecipeAPI } from './apis/RecipeAPI'

export default function App() {
 const  [recipe, setRecipe] = useState(null)
 const  [category, setCategory] = useState([])
 
 useEffect(() => {
  RecipeAPI.getcategory().then((categories) => {
    // response handling
    setCategory(categories)
  })
}, [])


  return (
    <div className="App">
      <Form ></Form>
      <Category categories = {category}></Category>
    </div>
  )
}
