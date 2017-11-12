import React from 'react'

const CreateRecipeIngredientPresenter = (props) => {
  const { addRecipeIngredient, recipeId } = props

  return (
    <div>
      <form onSubmit={event => {
        event.preventDefault()
        addRecipeIngredient( recipeId, {
          ingredientId: event.target.ingredientId.value,
          recipeQuantity: event.target.recipeQuantity.value,
          recipeUnit: event.target.recipeUnit.value,
          recipeId: recipeId
        })
      }}>

      <div>
        <label>Ingredient:</label>
        <div>
          <input type="text" name="ingredientId" className="input is-primary" />
        </div>
      </div>

      <div>
        <label>Quantity:</label>
        <div>
          <input type="text" name="recipeQuantity" placeholder="default" className="input is-primary" />
        </div>
      </div>

      <div>
        <label>Unit:</label>
        <div>
          <input type="text" name="recipeUnit" className="input is-primary"  />
        </div>
      </div>
      <div>
      <button type="submit" value="submit" className="button is-info">Add Ingredient</button>
      </div>

      </form>
    </div>
  )
}

export default CreateRecipeIngredientPresenter
