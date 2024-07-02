import { useEffect, useState } from "react"
import styles from "./fooddetails.module.css"
import ItemList from "./ItemList";

export default function FoodDetails({foodId}){
    
    const apiKey = import.meta.env.VITE_SPN_ACCESS_KEY;
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;

    const [food, setFood] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    //syntax of useEffect hook. pass a callback function ()=>{} and dependency array []
    useEffect(() => {

        //definition of function
        async function fetchFoodInformation(){
           const res = await fetch(`${URL}?apiKey=${apiKey}`);
           const data = await res.json();
           console.log(data);
           setFood(data);
           setIsLoading(false);
        }

        //calling of the function
        fetchFoodInformation();

    }, [foodId]);

    return(
        <div>
            <div className={styles.receipeCard}>
                
                <h1 className={styles.receipeName}>{food.title}</h1>
                <img className={styles.receipeImage} src={food.image}/>
                
                <div className={styles.receipeDetails}> 
                    <span>
                        🕧 <strong>{food.readyInMinutes} Minutes</strong>
                    </span>

                    <span>
                        👨‍👨‍👧‍👧<strong> Serves {food.servings}</strong>
                    </span> 

                    <span>
                        <strong>{food.vegetarian ? "🥕 Vegetarian" : "🥩 Non-Vegetarian"}</strong>
                    </span>
                    <span>
                        <strong>{food.vegan ? " 🐮 Vegan" : ""}</strong>
                    </span>
                </div>

                <div>
                    <span>
                        💲 <strong>{food.pricePerServing/100} per serving </strong>
                    </span>
                </div>

                <h2>Ingredients</h2>

                <ItemList food={food} isLoading={isLoading} />

                <h2>Instructions</h2>
                <div className={styles.receipeInstructions}>
                    <ol>
                        {isLoading? <p>Loading...</p> : <p>{food.analyzedInstructions[0].steps.map((item)=>(<li key={item.number}> {item.step} </li>))}</p>}
                    </ol>
                </div>

            </div>
        </div>
    );
}