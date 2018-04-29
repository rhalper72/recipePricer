import axios from 'axios'

//action types
export const GET_INGREDIENTS_FOR_RECIPE = 'GET_INGREDIENTS_FOR_RECIPE'
export const ADD_RECIPE_INGREDIENT = 'ADD_RECIPE_INGREDIENT'
export const UPDATE_RECIPE_INGREDIENT = 'UPDATE_RECIPE_INGREDIENT'

//action creators
export const getIngredientsForRecipe = recipeIngredients => ({
  type: GET_INGREDIENTS_FOR_RECIPE,
  recipeIngredients
})
export const addRecipeIngredient = recipeIngredient => ({
  type: ADD_RECIPE_INGREDIENT,
  recipeIngredient
})
export const modifyRecipeIngredient = recipeIngredient => ({
  type: UPDATE_RECIPE_INGREDIENT,
  recipeIngredient
})

//reducer
export default function recipeIngredientReducer(state = {recipeIngredients: [], currentRecipeIngredient: {}}, action) {
  switch (action.type) {
    case GET_INGREDIENTS_FOR_RECIPE:
      return {...state, recipeIngredients: action.recipeIngredients}
    case ADD_RECIPE_INGREDIENT:
      return {...state, recipeIngredients: [...recipeIngredients, action.recipeIngredient], currentRecipeIngredient: action.currentRecipeIngredient}
    case UPDATE_RECIPE_INGREDIENT:
      return {...state, recipeIngredients: recipeIngredients.map((recipeIng) => {
        return (recipeIng.id === action.recipeIngredient.id) ? action.recipeIngredient : recipeIng
      })}
    default:
      return state
  }
}

//thunk creators
export const fetchIngredientsForRecipe = recipeId =>
  dispatch => axios.get(`/api/recipeIngredients/recipe/${recipeId}`)
    .then(res => {
      return res.data
    })
    .then(recipeIngredients => {
      return dispatch(getIngredientsForRecipe(recipeIngredients))
    })
    .catch(err => console.error('Error getting ingredients for recipe', err))

export const postToRecipeIngredients = (recipeId, recipeIngredient, history) => {
  return dispatch => axios.post(`/api/recipeIngredients`, recipeIngredient)
    .then(res => {
      return res.data
    })
    .then(postedRecipeIngredient => {
      dispatch(addRecipeIngredient(postedRecipeIngredient))
      history.push(`/recipe/${recipeId}/addIngredient/${postedRecipeIngredient.ingredientId}`)
    })
    .catch(err => console.error(`Error posting recipe ingredient`, err))
  }

  export const updateRecipeIngredient = (updatedContent, recipeIngredientId) => {
    return dispatch => axios.put(`/api/${recipeIngredientId}`, updatedContent)
      .then(res => res.data)
      .then(updatedRecipeIngredient => {
        dispatch(modifyRecipeIngredient(updatedRecipeIngredient))
        // history.push(`/recipe/${recipeId}/addIngredient/${postedRecipeIngredient.ingredientId}`)
      })
      .catch(err => console.error(`Error updating recipe ingredient`, err))
    }
