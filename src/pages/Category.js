import { useState, useEffect } from "react"
import {useParams} from "react-router-dom"
import Main from "./Main"

export default function Category(props){
    const params = useParams()
    const  [recipe, setRecipe] = useState([])
    
    useEffect(() => {props.getrecipe(params.name).then((recipe) => {
        // response handling
        setRecipe(recipe)
    })},[])
    console.log(recipe)
    return(
        <div>
            <Main recipe = {recipe}/>
        </div>
    )  

}