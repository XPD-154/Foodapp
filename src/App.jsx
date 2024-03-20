import { useState } from 'react'
import Search from './component/Search'
import FoodList from './component/FoodList';
import Nav from './component/Nav';
import "./App.css"
import Container from './component/Container';
import InnerContainer from './component/InnerContainer';


function App() {
  
  const [foodData, setFoodData] = useState([]);

  return (
    <div className="App">

        <Nav/>
         
        <Search foodData={foodData} setFoodData={setFoodData} />

        <Container>
          <InnerContainer>
            <FoodList foodData={foodData} />
          </InnerContainer>
        </Container>

    </div>
  )
}

export default App
