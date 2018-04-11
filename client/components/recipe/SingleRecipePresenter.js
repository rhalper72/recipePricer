import React from 'react'
import { NavLink } from 'react-router-dom'
import IngredientPriceForm from '../ingredients/IngredientPriceForm'

const SingleRecipePresenter = (props) => {
  const { currentRecipe, recipeIngredients, ingredients } = props
  console.log('-----props----', props)
  return (
    <div>
      <section className="section">
        <div className="container">
          <div>
            <h3 className="title is-3">{currentRecipe.name}</h3>
          </div>
          <div>
            <figure className="image is-128x128">
              <img src={currentRecipe.image} />
            </figure>
          </div>
        </div>
        <div className="container">
          <h6 className="title is-6 recipe-sub-headers" >Servings: {currentRecipe.serving}</h6>
          <h6 className="title is-6 recipe-sub-headers">Batches: {currentRecipe.batches} </h6>
          <h6 className="title is-6 recipe-sub-headers">Total Cost: </h6>
          <h6 className="title is-6 recipe-sub-headers">Total Cost Per Batch: </h6>
        </div>
        <div className="container">
          <div className="content">
          <NavLink to={`/recipe/${currentRecipe.id}/addIngredient`} className="button is-link is-small">Add Ingredient</NavLink>
          <ul>
            {recipeIngredients && recipeIngredients.map(recipeIngredient => {
              return (
                <div className="recipe-ingredient" key={recipeIngredient.id} >
                  <li>
                    {`${ingredients[recipeIngredient.ingredientId - 1].name}: ${recipeIngredient.recipeQuantity} ${recipeIngredient.recipeUnit}`}
                  </li>
                </div>
              )
            })}
          </ul>
        </div>
        </div>

      </section>
    </div>
  )
}

export default SingleRecipePresenter
