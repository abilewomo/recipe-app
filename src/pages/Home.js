import { useState, useEffect } from 'react'
import Main
 from './Main'
export default function Home(props){
const [formData, setFormData] = useState({
                searchfield:  "",
              })
const  [recipe, setRecipe] = useState([])
useEffect(() => {
        props.getRandomRecipe().then((recipe) => {
          // response handling
          setRecipe(recipe)
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
        props.getRecipe(formData.searchfield).then((recipe) => {
            // response handling
            setRecipe(recipe)
          })
      
      
        
      }
return(
        <div>
        <form onSubmit={handleSubmit} onChange={handleChange} value={formData.searchterm}>
                <input className='textfield' type="text" name="searchfield" />
                <input className='submit' type="submit" value = "Search" />
        </form>
        <Main recipe = {recipe}/>
        </div>
)
}