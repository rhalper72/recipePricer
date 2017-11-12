import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import user from './user'
import recipeReducer from './recipe'
import currentRecipeReducer from './currentRecipe'
import {composeWithDevTools} from 'redux-devtools-extension'

const reducer = combineReducers({
    user,
    recipes: recipeReducer,
    currentRecipe: currentRecipeReducer
})
const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger({collapsed: true})))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './recipe'
export * from './currentRecipe'
