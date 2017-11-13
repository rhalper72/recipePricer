import React from 'react'

const CreateRecipePresenter = (props) => {
  const { addRecipe, user } = props
  const userId = user.id

  return (
    <div>
      <form onSubmit={event => {
        event.preventDefault()

        const imageDefault = 'https://us.123rf.com/450wm/pixelbliss/pixelbliss1503/pixelbliss150300041/37890588-open-blank-recipe-book-surrounded-with-ingredients.jpg?ver=6'
        const servingValue = (event.target.recipeServings.value === '') ? 1 : event.target.recipeServings.value
        const imageValue = (event.target.recipeImage.value === '') ? imageDefault : event.target.recipeImage.value
        const nameValue = (event.target.recipeName.value === '') ? 'A New Recipe' : event.target.recipeName.value
        addRecipe(userId, {
          name: nameValue,
          image: imageValue,
          serving: servingValue,
          userId: userId
        })
      }}>
      <div className="container">
        <h3 className="title is-3">Add A New Recipe</h3>
      </div>
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
          <input type="text" name="recipeServings" className="input is-primary"  />
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
