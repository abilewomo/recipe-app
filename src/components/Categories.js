import { Link } from "react-router-dom"

export default function Categories(props){
    
     const JSX = props.categories.map((category) => (
         <div className="category" key = {category.idCategory}>
            <h3>{category.strCategory}</h3>
            <Link to={`/categories/${category.strCategory}`}><img src={category.strCategoryThumb} /></Link>
            <p>{category.strCategoryDescription}</p>
        </div>
     )

     )
    return(
        <div>
            {JSX}
        </div>
    )
}