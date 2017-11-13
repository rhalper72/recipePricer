import React from 'react'


const CreateRecipeIngredientPresenter = (props) => {
  const { addRecipeIngredient, recipeId, ingredients } = props

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
          <select name="ingredientId">
            {ingredients && ingredients.map(ingredient => {
              return (
                <option key={ingredient.id} value={ingredient.id}>{`${ingredient.name}`}</option>
              )
            })}
          </select>
        </div>
      </div>

      <div>
        <label>Quantity:</label>
        <div>
          <input type="text" name="recipeQuantity" className="input is-primary" />
        </div>
      </div>

      <div>
        <label>Unit:</label>
        <div>
          {/* <input type="text" name="recipeUnit" className="input is-primary"  /> */}
          <select name="recipeUnit">
                <option value="Cups">Cups</option>
                <option value="Teaspoons">Teaspoons</option>
                <option value="Tablespoons">Tablespoons</option>
                <option value="Grams">Grams</option>
                <option value="Ounces">Ounces</option>
                <option value="Pounds">Pounds</option>
                <option value="Each">Each</option>
            })}
          </select>
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
