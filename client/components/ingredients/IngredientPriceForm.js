import React from 'react'

const IngredientPriceForm = (props) => {
  // const { addRecipe, user } = props
  //Form is currently just a placeholder, on submit and other functionality is not in yet.
  return (
    <div className="ingredient-price-form">
      <form >
      <div>
        <label>Price:</label>
        <div>
          <input type="text" name="ingredientPrice" className="input is-primary" placeholder="$" />
        </div>
      </div>

      <div>
        <label>Amount Purchased:</label>
        <div>
          <input type="text" name="ingredientAmount" placeholder="default" className="input is-primary" />
        </div>
      </div>

      <div>
        <label>Unit Purchased:</label>
        <div>
          <input type="text" name="ingredientUnit" className="input is-primary"  />
        </div>
      </div>
      <div>
      <button type="submit" value="submit" className="button is-info">Submit</button>
      </div>

      </form>
    </div>
  )
}

export default IngredientPriceForm
