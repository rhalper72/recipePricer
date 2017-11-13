import axios from 'axios'

//action types
export const GET_RECIPES = 'GET_RECIPES'
export const ADD_RECIPE = 'ADD_RECIPE'

//action creators
export const getRecipes = recipes => ({
  type: GET_RECIPES,
  recipes
})
export const addRecipe = recipe => ({
  type: ADD_RECIPE,
  recipe
})

//reducer
export default function recipeReducer(recipes = [], action) {
  switch (action.type) {
    case GET_RECIPES:
      return action.recipes
    case ADD_RECIPE:
      return [...recipes, action.recipe]
    default:
      return recipes
  }
}

//thunk creators
export const fetchRecipes = () =>
  dispatch => axios.get(`/api/recipes`)
    .then(res => res.data)
    .then(recipes => dispatch(getRecipes(recipes)))
    .catch(err => console.error('Error getting recipes', err))

export const postToRecipes = (userId, recipe, history) =>
  dispatch => axios.post(`/api/recipes`, recipe)
    .then(res => {
      return res.data
    })
    .then(postedRecipe => {
        dispatch(addRecipe(postedRecipe))
        history.push(`/recipe/${postedRecipe.id}`)
    })
    .catch(err => console.error(`Error posting recipe`, err))

