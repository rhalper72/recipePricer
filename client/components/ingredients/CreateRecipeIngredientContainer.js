import { connect } from 'react-redux'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { postToRecipeIngredients, fetchIngredients } from '../../store'
import CreateRecipeIngredientPresenter from './CreateRecipeIngredientPresenter'
import IngredientPriceForm from './IngredientPriceForm'

class CreateRecipeIngredientContainerClass extends Component {
    render () {
      const recipeId = this.props.match.params.id
      const ingredientPriceId = this.props.match.params.priceId
      const {addRecipeIngredient, currentRecipe, ingredients} = this.props
      return (
        <div>
          {currentRecipe &&
            <CreateRecipeIngredientPresenter
              addRecipeIngredient={addRecipeIngredient}
              recipeId={recipeId}
              ingredients={ingredients}
            />}
          {ingredientPriceId ? <IngredientPriceForm /> : ''}
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
      console.log('IN ADD RECIPE INGREDIENT______')
      event.preventDefault()
      dispatch(postToRecipeIngredients(recipeId, recipeIngredient, ownProps.history))
    }
  })

  const CreateRecipeIngredientContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateRecipeIngredientContainerClass))
  export default CreateRecipeIngredientContainer
