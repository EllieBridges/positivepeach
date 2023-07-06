export default function Ingredients({data}) {
    return(
        <div className ='ingredientsList'>
            <ul>
            {data.map((ingredient)=> {
                return(
                    <li>{ingredient}</li>
                ) 
            })}
            </ul>
        </div>
    )
}