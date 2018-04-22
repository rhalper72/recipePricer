import React from 'react'
import { NavLink } from 'react-router-dom'

const SingleRecipePresenter = (props) => {
  const { ingredients, recipeIngredient } = props
  return (
    <div className="recipe-ingredient" key={recipeIngredient.id} >
      <li>
        {`${ingredients[recipeIngredient.ingredientId - 1].name}: ${recipeIngredient.recipeQuantity} ${recipeIngredient.recipeUnit}`}
      </li>
    </div>
  )
}

export default SingleRecipePresenter
