import { Link } from "react-router-dom"

export default function Category(props){
     const JSX = props.categories.map((category) => (
         <div key = {category.idCategory}>
            <h3>{category.strCategory}</h3>
            <Link to={category.strCategory}><img src={category.strCategoryThumb} /></Link>
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