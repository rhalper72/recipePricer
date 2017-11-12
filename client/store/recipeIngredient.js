import axios from 'axios'

//action types
export const ADD_RECIPE_INGREDIENT = 'ADD_RECIPE_INGREDIENT'

//action creators
export const addRecipeIngredient = recipeIngredient => ({
  type: ADD_RECIPE_INGREDIENT,
  recipeIngredient
})

//reducer
export default function recipeIngredientReducer(recipeIngredients = [], action) {
  switch (action.type) {
    case ADD_RECIPE_INGREDIENT:
      return [...recipeIngredients, action.recipe]
    default:
      return recipeIngredients
  }
}

//thunk creators
export const postToRecipeIngredients = (recipeId, recipeIngredient) =>
  dispatch => axios.post(`/api/recipeIngredients`, recipeIngredient)
    .then(res => {
      return res.data
    })
    .then(postedRecipeIngredient => dispatch(addRecipeIngredient(postedRecipeIngredient)))
    .catch(err => console.error(`Error posting recipe ingredient`, err))

