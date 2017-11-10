import React from 'react'

const CreateRecipePresenter = (props) => {
  const { addRecipe, user } = props
  const userId = user.id

  return (
    <div>
      <form onSubmit={event => {
        event.preventDefault()
        addRecipe(userId, {
          name: event.target.recipeName.value,
          image: event.target.recipeImage.value,
          serving: event.target.recipeServings.value,
          userId: userId
        })
      }}>

      <div>
        <label>Recipe Name:</label>
        <div>
          <input type="text" name="recipeName" className="input is-primary" />
        </div>
      </div>

      <div>
        <label>Recipe Image URL:</label>
        <div>
          <input type="text" name="recipeImage" placeholder="default" className="input is-primary" />
        </div>
      </div>

      <div>
        <label>Number of Servings:</label>
        <div>
          <input type="text" name="recipeServings" placeholder="default" className="input is-primary" />
        </div>
      </div>
      <div>
      <button type="submit" value="submit" className="button is-info">Submit Recipe</button>
      </div>

      </form>
    </div>
  )
}

export default CreateRecipePresenter
