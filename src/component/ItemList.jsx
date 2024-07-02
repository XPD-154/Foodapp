import { useEffect, useState } from "react"
import Item from "./Item";

export default function ItemList({food, isLoading}){
    
    return(
        <div>
            {isLoading? <p>Loading...</p> : <div>{food.extendedIngredients.map((info)=>(<Item key={info.id} info={info}/>))
            }</div>}
        </div>
    )
}