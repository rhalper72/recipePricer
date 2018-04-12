import React from 'react'

const CreateRecipeIngredientPresenter = (props) => {
  const { addRecipeIngredient, recipeId, ingredients } = props

  return (
    <div >
      <h4 className="title is-4"> Step 1/2: Add the Ingredient </h4>
      <form
        id="recipe-ingredient-form"
        onSubmit={event => {
          event.preventDefault()
          addRecipeIngredient(recipeId, {
            ingredientId: event.target.ingredientId.value,
            recipeQuantity: event.target.recipeQuantity.value,
            recipeUnit: event.target.recipeUnit.value,
            recipeId: recipeId
          })
        }}>

        <div className="recipe-ingredient-form-item">
          <label>Ingredient:</label>
          <div className="select is-info">
            <select name="ingredientId" >
              {ingredients && ingredients.map(ingredient => {
                return (
                  <option key={ingredient.id} value={ingredient.id}>{`${ingredient.name}`}</option>
                )
              })}
            </select>
          </div>
        </div>

        <div className="recipe-ingredient-form-item">
          <label>Quantity:</label>
          <div>
            <input type="text" name="recipeQuantity" className="input is-primary" />
          </div>
        </div>

        <div className="recipe-ingredient-form-item">
          <label>Unit:</label>
          <div className="select is-info">
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
          <button type="submit" value="submit" className="button is-info recipe-ingredient-form-item">Submit</button>
        </div>

      </form>
    </div>
  )
}

export default CreateRecipeIngredientPresenter
