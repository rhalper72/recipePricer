import React from 'react'
import { NavLink } from 'react-router-dom'

const SingleRecipePresenter = (props) => {
  const { currentRecipe, recipeIngredients, ingredients } = props
  console.log('-----props----', props)
  return (
    <div>
      <section className="section">
        <div className="container">
          <div>
            <h1 className="title is-1">{currentRecipe.name}</h1>
          </div>
          <div>
            <figure className="image is-128x128">
              <img src={currentRecipe.image} />
            </figure>
          </div>
        </div>
        <div className="container">
          <h6 className="title is-6">Servings: {currentRecipe.serving} </h6>
          <h6 className="title is-6">Batches: {currentRecipe.batches} </h6>
        </div>
        <div>
        <NavLink to={`/recipe/${currentRecipe.id}/addIngredient`} className="button is-link is-medium">Add Ingredient</NavLink>
        <ul>
          {recipeIngredients && recipeIngredients.map(recipeIngredient => {
            return (
              <li key={recipeIngredient.id} >
                {`${ingredients[recipeIngredient.ingredientId - 1].name}: ${recipeIngredient.recipeQuantity} ${recipeIngredient.recipeUnit}`}
              </li>
            )
          })}
        </ul>
        </div>

      </section>
    </div>
  )
}

export default SingleRecipePresenter
