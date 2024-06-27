import { useEffect, useState } from "react"
import styles from "./search.module.css"

const URL = "https://api.spoonacular.com/recipes/complexSearch"
const apiKey = import.meta.env.VITE_SPN_ACCESS_KEY

export default function Search({foodData, setFoodData}){

    const [query, setQuery] = useState("pizza");

    //syntax of useEffect hook. pass a callback function ()=>{} and dependency array []
    useEffect(() => {

        //definition of function
        async function fetchFood(){
           const res = await fetch(`${URL}?query=${query}&apiKey=${apiKey}`);
           const data = await res.json();
           //console.log(data);
           console.log(data.results);

           setFoodData(data.results);
        }

        //calling of the function
        fetchFood();

    }, [query]);

    return(
        <div className={styles.searchContainer}>
            <input className={styles.input} type="text" placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
    )
}