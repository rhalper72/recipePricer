import axios from 'axios'

//action types
export const GET_INGREDIENTS_FOR_RECIPE = 'GET_INGREDIENTS_FOR_RECIPE'
export const ADD_RECIPE_INGREDIENT = 'ADD_RECIPE_INGREDIENT'

//action creators
export const getIngredientsForRecipe = recipeIngredients => ({
  type: GET_INGREDIENTS_FOR_RECIPE,
  recipeIngredients
})
export const addRecipeIngredient = recipeIngredient => ({
  type: ADD_RECIPE_INGREDIENT,
  recipeIngredient
})

//reducer
export default function recipeIngredientReducer(recipeIngredients = [], action) {
  switch (action.type) {
    case GET_INGREDIENTS_FOR_RECIPE:
      return action.recipeIngredients
    case ADD_RECIPE_INGREDIENT:
      return [...recipeIngredients, action.recipeIngredient]
    default:
      return recipeIngredients
  }
}

//thunk creators
export const fetchIngredientsForRecipe = recipeId =>
  dispatch => axios.get(`/api/recipeIngredients/recipe/${recipeId}`)
    .then(res => {
      console.log('IN THUNK!!!!', res)
      return res.data
    })
    .then(recipeIngredients => dispatch(getIngredientsForRecipe(recipeIngredients)))
    .catch(err => console.error('Error getting ingredients for recipe', err))

export const postToRecipeIngredients = (recipeId, recipeIngredient, history) => {
  console.log('the recipe ingredient', recipeIngredient)
  return dispatch => axios.post(`/api/recipeIngredients`, recipeIngredient)
    .then(res => {
      console.log('the res', res)
      return res.data
    })
    .then(postedRecipeIngredient => {
      dispatch(addRecipeIngredient(postedRecipeIngredient))
      history.push(`/recipe/${recipeId}/addIngredient/${postedRecipeIngredient.ingredientId}`)
    })
    .catch(err => console.error(`Error posting recipe ingredient`, err))
  }

