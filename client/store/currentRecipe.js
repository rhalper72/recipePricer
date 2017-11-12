import axios from 'axios'

//action types
export const GET_CURRENT_RECIPE = 'GET_CURRENT_RECIPE'

//action creators
export const getCurrentRecipe = recipe => ({
  type: GET_CURRENT_RECIPE,
  recipe
})

//reducer
export default function currentRecipeReducer(state = {}, action) {
  switch (action.type) {
    case GET_CURRENT_RECIPE:
      return action.recipe
    default:
      return state
  }
}

//thunk creators
export const fetchCurrentRecipe = id =>
  dispatch => axios.get(`/api/recipes/${id}`)
    .then(res => res.data)
    .then(recipe => dispatch(getCurrentRecipe(recipe)))
    .catch(err => console.error('Error getting current recipe', err))
