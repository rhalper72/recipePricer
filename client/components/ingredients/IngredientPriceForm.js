import React from 'react'

const IngredientPriceForm = (props) => {
  const { addPurchaseIngredient, editRecipeIngredient, recipeId, ingredientId, userId, currentPurchaseIngredient } = props
  return (
    <div >
      <h4 className="title is-4"> Step 2/2: Add the Price </h4>
      <form
        id="ingredient-price-form"
        onSubmit={event => {
          event.preventDefault()
          console.log('BEFFFOOOORRREE')
          addPurchaseIngredient(recipeId, {
            ingredientId: ingredientId,
            userId: userId,
            purchasePrice: event.target.purchasePrice.value,
            purchaseQuantity: event.target.purchaseQuantity.value,
            purchaseUnit: event.target.purchaseUnit.value,
          })
        }}>

      <div className="ingredient-price-form-item">
        <label>Price:</label>
        <div>
          <input type="text" name="purchasePrice" className="input is-primary" placeholder="$" />
        </div>
      </div>

      <div className="ingredient-price-form-item">
        <label>Amount Purchased:</label>
        <div>
          <input type="text" name="purchaseQuantity" placeholder="default" className="input is-primary" />
        </div>
      </div>

      <div className="ingredient-price-form-item">
        <label>Unit Purchased:</label>
        <div>
          <input type="text" name="purchaseUnit" className="input is-primary"  />
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
