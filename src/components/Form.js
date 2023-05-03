import { useState } from "react"
import { Route, Routes } from 'react-router-dom'
import Categories from "./Categories"

export default function Form(props){
    const [formData, setFormData] = useState({
        searchfield:  "",
    })
    const handleChange = (event) => {
        //use the event object to detect key and value to update
        setFormData({ ...formData, [event.target.name]: event.target.value });
      }
    const handleSubmit = (event) => {
        //prevent page from refreshing on form submission
        event.preventDefault()
        //pass the search term to moviesearch prop, which is apps getMovie function
        props.recipesearch(formData.searchfield).then((recipe) => {
            // response handling
          })
        console.log(recipe)
    
        
      }

    return(
        <div>
            <form onSubmit={handleSubmit} onChange={handleChange} value={formData.searchterm}>
                <input type="text" name="searchfield" />
                <input type="submit" value = "Search" />
            </form>
           
        </div>
    )
}