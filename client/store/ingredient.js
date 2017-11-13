import axios from 'axios'

//action types
export const GET_INGREDIENTS = 'GET_INGREDIENTS'

//action creators
export const getIngredients = ingredients => ({
  type: GET_INGREDIENTS,
  ingredients
})

//reducer
export default function ingredientReducer(recipeIngredients = [], action) {
  switch (action.type) {
    case GET_INGREDIENTS:
      return action.ingredients
    default:
      return recipeIngredients
  }
}

//thunk creators
export const fetchIngredients = () =>
  dispatch => axios.get(`/api/ingredients/`)
    .then(res => {
      console.log('IN THUNK!!!!', res)
      return res.data
    })
    .then(ingredients => dispatch(getIngredients(ingredients)))
    .catch(err => console.error('Error getting ingredients for recipe', err))

