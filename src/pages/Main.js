export default function Main(props){
    const JSX = props.recipe.map((recipe) => (
        <div key = {recipe.idMeal}>
           <h3>{recipe.strMeal}</h3>
           <img src={recipe.strMealThumb} />
           <h3>Ingredients</h3>
           <p>{recipe.strInstructions}</p>
       </div>
    )

   )
    return(
        <div>
            {JSX}
        </div>
    )
}