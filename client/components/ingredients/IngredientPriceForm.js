import React from 'react'

const IngredientPriceForm = (props) => {
  // const { addRecipe, user } = props
  //Form is currently just a placeholder, on submit and other functionality is not in yet.
  return (
    <div >
      <h4 className="title is-4"> Step 2/2: Add the Price </h4>
      <form id="ingredient-price-form">
      <div className="ingredient-price-form-item">
        <label>Price:</label>
        <div>
          <input type="text" name="ingredientPrice" className="input is-primary" placeholder="$" />
        </div>
      </div>

      <div className="ingredient-price-form-item">
        <label>Amount Purchased:</label>
        <div>
          <input type="text" name="ingredientAmount" placeholder="default" className="input is-primary" />
        </div>
      </div>

      <div className="ingredient-price-form-item">
        <label>Unit Purchased:</label>
        <div>
          <input type="text" name="ingredientUnit" className="input is-primary"  />
        </div>
      </div>
      <div className="ingredient-price-form-item">
      <button type="submit" value="submit" className="button is-info">Submit</button>
      </div>

      </form>
    </div>
  )
}

export default IngredientPriceForm
