
export default function FoodItem({food}){
    return(
        <div>
            <img src={food.image}/>
            <p>{food.title}</p>
            <button>View Recipe</button>
        </div>
    )
}