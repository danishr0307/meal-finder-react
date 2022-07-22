import React from 'react'
import '../App.css'

export default function Receipe(props) {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const name = 'strIngredient' + i;
    ingredients[i - 1] = props.meal[name];
  }
  return (
    <div id='single-meal'>
      <div className='single-meal'>
        <h1>{props.meal.strMeal}</h1>
        <img src={props.meal.strMealThumb} alt={props.meal.strMeal} />
        <div className='single-meal-info'>
          <h2 className='text-center'>{props.meal.strCategory}</h2>
          <h2 className='text-center'>{props.meal.strArea}</h2>
        </div>
        <div className='main'>
          <p>{props.meal.strInstructions}</p>
          <h2 className='inge'><span>Ingredients</span></h2>
          <ul>
            {
              ingredients.map((e) => e ? <li key={e}>{e}</li> : null)
            }
          </ul>
        </div>
      </div>
    </div>
  )
}
