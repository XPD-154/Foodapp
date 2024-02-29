import { useEffect, useState } from "react"

const URL = "https://api.spoonacular.com/recipes/complexSearch"
const apiKey = "193aa55e955548c28f11f4443b5ce7e2"

export default function Search({foodData, setFoodData}){

    const [query, setQuery] = useState("pizza");

    //syntax of useEffect hook. pass a callback function and dependency array
    useEffect(() => {

        async function fetchFood(){
           const res = await fetch(`${URL}?query=${query}&apiKey=${apiKey}`);
           const data = await res.json();
           console.log(data.results);

           setFoodData(data.results);
        }

        fetchFood();

    }, [query]);

    return(
        <div>
            <input type="text" placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
    )
}