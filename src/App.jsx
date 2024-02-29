import { useState } from 'react'
import Search from './component/Search'


function App() {
  
  const [foodData, setFoodData] = useState([]);

  return (
    <div className="App">
      
        <Search foodData={foodData} setFoodData={setFoodData} />

        {foodData.map((food)=>(
            <p>{food.title}</p>
        ))}
    </div>
  )
}

export default App
