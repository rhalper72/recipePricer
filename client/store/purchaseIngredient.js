import axios from 'axios'

//action types
export const GET_PURCHASEINFO_FOR_INGREDIENT = 'GET_PURCHASEINFO_FOR_INGREDIENT'
export const ADD_PURCHASE_INGREDIENT = 'ADD_PURCHASE_INGREDIENT'

//action creators
export const getPurchaseInfoForIngredient = purchaseIngredients => ({
  type: GET_PURCHASEINFO_FOR_INGREDIENT,
  purchaseIngredients
})
export const addPurchaseIngredient = purchaseIngredient => ({
  type: ADD_PURCHASE_INGREDIENT,
  purchaseIngredient
})

//reducer
export default function purchaseIngredientReducer(purchaseIngredients = [], action) {
  switch (action.type) {
    case GET_PURCHASEINFO_FOR_INGREDIENT:
      return action.purchaseIngredients
    case ADD_PURCHASE_INGREDIENT:
      return [...purchaseIngredients, action.purchaseIngredient]
    default:
      return purchaseIngredients
  }
}

//thunk creators
export const fetchPurchaseInfoForIngredients = ingredientId =>
  dispatch => axios.get(`/api/purchaseIngredients/recipe/${ingredientId}`)
    .then(res => {
      console.log('IN THUNK!!!!', res)
      return res.data
    })
    .then(purchaseIngredients => dispatch(getPurchaseInfoForIngredient(purchaseIngredients)))
    .catch(err => console.error('Error getting ingredients for recipe', err))

export const postToPurchaseIngredients = (recipeId, purchaseIngredient, history) =>
  dispatch => axios.post(`/api/purchaseIngredients`, purchaseIngredient)
    .then(res => res.data)
    .then(postedPurchaseIngredient => {
      dispatch(addPurchaseIngredient(postedPurchaseIngredient))
      history.push(`/recipe/${recipeId}/addIngredient/${postedPurchaseIngredient.id}`)
    })
    .catch(err => console.error(`Error posting recipe ingredient`, err))

