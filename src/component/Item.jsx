import { useEffect, useState } from "react"
import styles from "./item.module.css"

export default function ItemList({info}){
    return(
        <div>
            <div className={styles.itemContainer}>

                <div className={styles.itemImage}>
                    <img className={styles.image} src={`https://img.spoonacular.com/ingredients_100x100/${info.image}`}/>
                </div>

                <div className={styles.itemInfo}>
                    <div className={styles.itemName}>{info.name}</div>
                    <div className={styles.ItemAmount}>{info.amount} {info.unit}</div>
                </div>
            </div>
        </div>
    )
}