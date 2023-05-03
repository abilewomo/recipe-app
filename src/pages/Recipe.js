export default function Recipe({recipe}){
    const loaded = () => {
        const JSX = recipe.map((recipe) => (
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
    
    //function to return loading JSX
    const loading = () => {
      return <h1>No recipe to Display</h1>;
    };
  
    //Ternary operator will determine which functions JSX we will return
    return recipe ? loaded() : loading();
}