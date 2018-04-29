import { connect } from 'react-redux'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { postToRecipeIngredients, postToPurchaseIngredients, updateRecipeIngredient } from '../../store'
import CreateRecipeIngredientPresenter from './CreateRecipeIngredientPresenter'
import IngredientPriceForm from './IngredientPriceForm'

class CreateRecipeIngredientContainerClass extends Component {
    render () {
      const recipeId = this.props.match.params.id
      const ingredientId = this.props.match.params.ingredientId
      const {addRecipeIngredient, currentRecipe, ingredients, addPurchaseIngredient, user, editRecipeIngredient} = this.props
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
            editRecipeIngredient={editRecipeIngredient}
            recipeId={recipeId}
            ingredientId={ingredientId}
            userId={user.id}
            currentPurchaseIngredient={this.props.currentPurchaseIngredient}
          /> : ''}
        </div>
      )
    }
  }

  const mapStateToProps = state => ({
    user: state.user,
    currentRecipe: state.currentRecipe,
    ingredients: state.ingredients,
    currentPurchaseIngredient: state.currentPurchaseIngredient,
    currentRecipeIngredient: state.currentRecipeIngredient
  })

  const mapDispatchToProps = (dispatch, ownProps) => ({
    addRecipeIngredient(recipeId, recipeIngredient) {
      event.preventDefault()
      dispatch(postToRecipeIngredients(recipeId, recipeIngredient, ownProps.history))
    },
    addPurchaseIngredient(recipeId, purchaseIngredient) {
      event.preventDefault()
      dispatch(postToPurchaseIngredients(recipeId, purchaseIngredient, ownProps.history))
    },
    editRecipeIngredient(updatedContent, recipeIngredientId) {
      event.preventDefault()
      dispatch(updateRecipeIngredient(updatedContent, recipeIngredientId))
    }
    
  })

  const CreateRecipeIngredientContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateRecipeIngredientContainerClass))
  export default CreateRecipeIngredientContainer
