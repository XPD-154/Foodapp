import { useEffect, useState } from "react"

export default function FoodDetails({foodId}){
    
    const apiKey = import.meta.env.VITE_SPN_ACCESS_KEY;
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;

    const [food, setFood] = useState({});

    //syntax of useEffect hook. pass a callback function ()=>{} and dependency array []
    useEffect(() => {

        //definition of function
        async function fetchFoodInformation(){
           const res = await fetch(`${URL}?apiKey=${apiKey}`);
           const data = await res.json();
           console.log(data);
           setFood(data);
        }

        //calling of the function
        fetchFoodInformation();

    }, [foodId]);

    return(
        <div>Food Details {foodId} {food.title} <img src={food.image}/> </div>
    );
}