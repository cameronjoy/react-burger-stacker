import React, { Component } from "react"
import Ingredient from "./IngredientList.jsx"

const ingredientData = [
    {name: 'Kaiser Bun', color: 'saddlebrown'},
    {name: 'Sesame Bun', color: 'sandybrown'},
    {name: 'Gluten Free Bun', color: 'peru'},
    {name: 'Lettuce Wrap', color: 'olivedrab'},
    {name: 'Beef Patty', color: '#3F250B'},
    {name: 'Soy Patty', color: '#3F250B'},
    {name: 'Black Bean Patty', color: '#3F250B'},
    {name: 'Chicken Patty', color: 'burlywood'},
    {name: 'Lettuce', color: 'lawngreen'},
    {name: 'Tomato', color: 'tomato'},
    {name: 'Bacon', color: 'maroon'},
    {name: 'Onion', color: 'lightyellow'}
  
]

class App extends Component {
  render(){
    const ingredients = ingredientData.map((ingredient, index) => {
      return <Ingredient
      name={ingredient.name}
      color={ingredient.color}
      />
    })
    return(
      <div>
        {ingredients}
      </div>
    )
  }
}

export default App;
