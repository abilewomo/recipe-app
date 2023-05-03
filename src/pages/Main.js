export default function Main({recipe}){
const loaded = () => {
    const JSX = recipe.map((recipe) => (
        
        <div className="recipe" key = {recipe.idMeal}>
           <h3>{recipe.strMeal}</h3>
           <img src={recipe.strMealThumb} />
           <h2>Ingredients</h2>
           <p>{recipe.strMeasure1 ? recipe.strMeasure1  : ""}  {recipe.strIngredient1 ? recipe.strIngredient1  : ""}</p>
           <p>{recipe.strMeasure2 ? recipe.strMeasure2  : ""}  {recipe.strIngredient2 ? recipe.strIngredient2  : ""}</p>
           <p>{recipe.strMeasure3 ? recipe.strMeasure3  : ""}  {recipe.strIngredient3 ? recipe.strIngredient3  : ""}</p>
           <p>{recipe.strMeasure4 ? recipe.strMeasure4  : ""}  {recipe.strIngredient4 ? recipe.strIngredient4  : ""}</p>
           <p>{recipe.strMeasure5 ? recipe.strMeasure5  : ""}  {recipe.strIngredient5 ? recipe.strIngredient5  : ""}</p>
           <p>{recipe.strMeasure6 ? recipe.strMeasure6  : ""}  {recipe.strIngredient6 ? recipe.strIngredient6  : ""}</p>
           <p>{recipe.strMeasure7 ? recipe.strMeasure7  : ""}  {recipe.strIngredient7 ? recipe.strIngredient7  : ""}</p>
           <p>{recipe.strMeasure8 ? recipe.strMeasure8  : ""}  {recipe.strIngredient8 ? recipe.strIngredient8  : ""}</p>
           <p>{recipe.strMeasure9 ? recipe.strMeasure9  : ""}  {recipe.strIngredient9 ? recipe.strIngredient9  : ""}</p>
           <p>{recipe.strMeasure10 ? recipe.strMeasure10  : ""}  {recipe.strIngredient10 ? recipe.strIngredient10  : ""}</p>
           <p>{recipe.strMeasure11 ? recipe.strMeasure11  : ""}  {recipe.strIngredient11 ? recipe.strIngredient11  : ""}</p>
           <p>{recipe.strMeasure12 ? recipe.strMeasure12  : ""}  {recipe.strIngredient12 ? recipe.strIngredient12  : ""}</p>
           <p>{recipe.strMeasure13 ? recipe.strMeasure13  : ""}  {recipe.strIngredient13 ? recipe.strIngredient13  : ""}</p>
           <p>{recipe.strMeasure14 ? recipe.strMeasure14  : ""}  {recipe.strIngredient14 ? recipe.strIngredient14  : ""}</p>
           <p>{recipe.strMeasure15 ? recipe.strMeasure15  : ""}  {recipe.strIngredient15 ? recipe.strIngredient15  : ""}</p>
           <p>{recipe.strMeasure16 ? recipe.strMeasure16  : ""}  {recipe.strIngredient16 ? recipe.strIngredient16  : ""}</p>
           <p>{recipe.strMeasure17 ? recipe.strMeasure17  : ""}  {recipe.strIngredient17 ? recipe.strIngredient17  : ""}</p>
           <p>{recipe.strMeasure18 ? recipe.strMeasure18  : ""}  {recipe.strIngredient18 ? recipe.strIngredient18  : ""}</p>
           <p>{recipe.strMeasure19 ? recipe.strMeasure19  : ""}  {recipe.strIngredient19 ? recipe.strIngredient19  : ""}</p>
           <p>{recipe.strMeasure20 ? recipe.strMeasure20  : ""}  {recipe.strIngredient20 ? recipe.strIngredient20  : ""}</p>
           <h2>Instructions</h2>
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