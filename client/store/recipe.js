import axios from 'axios'

//action types
export const ADD_RECIPE = 'ADD_RECIPE'

//action creators
export const addRecipe = recipe => ({
  type: ADD_RECIPE,
  recipe
})

//reducer
export default function recipeReducer(recipes = [], action) {
  switch (action.type) {
    case ADD_RECIPE:
      return [...recipes, action.recipe]
    default:
      return recipes
  }
}

//thunk creators
export const postToRecipes = (userId, recipe) =>
  dispatch => axios.post(`/api/recipes`, recipe)
    .then(res => {
      console.log(res)
      return res.data

    })
    .then(postedRecipe => dispatch(addRecipe(postedRecipe)))
    .catch(err => console.error(`Error posting recipe`, err))

