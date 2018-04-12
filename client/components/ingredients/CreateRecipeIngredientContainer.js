import { connect } from 'react-redux'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { postToRecipeIngredients, postToPurchaseIngredients } from '../../store'
import CreateRecipeIngredientPresenter from './CreateRecipeIngredientPresenter'
import IngredientPriceForm from './IngredientPriceForm'

class CreateRecipeIngredientContainerClass extends Component {
    render () {
      const recipeId = this.props.match.params.id
      const ingredientId = this.props.match.params.ingredientId
      const {addRecipeIngredient, currentRecipe, ingredients, addPurchaseIngredient, user} = this.props
      return (
        <div>
          {currentRecipe &&
            <CreateRecipeIngredientPresenter
              addRecipeIngredient={addRecipeIngredient}
              recipeId={recipeId}
              ingredients={ingredients}
            />}
          {ingredientId ? <IngredientPriceForm 
            addPurchaseIngredient={addPurchaseIngredient}
            recipeId={recipeId}
            ingredientId={ingredientId}
            userId={user.id}
          /> : ''}
        </div>
      )
    }
  }

  const mapStateToProps = state => ({
    user: state.user,
    currentRecipe: state.currentRecipe,
    ingredients: state.ingredients
  })

  const mapDispatchToProps = (dispatch, ownProps) => ({
    addRecipeIngredient(recipeId, recipeIngredient) {
      event.preventDefault()
      dispatch(postToRecipeIngredients(recipeId, recipeIngredient, ownProps.history))
    },
    addPurchaseIngredient(recipeId, purchaseIngredient) {
      console.log('IN ADD PURCHASE INGREDIENT______')
      event.preventDefault()
      dispatch(postToPurchaseIngredients(recipeId, purchaseIngredient, ownProps.history))
    }
  })

  const CreateRecipeIngredientContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateRecipeIngredientContainerClass))
  export default CreateRecipeIngredientContainer
