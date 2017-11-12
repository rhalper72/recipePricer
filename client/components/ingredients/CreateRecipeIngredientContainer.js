import { connect } from 'react-redux'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { postToRecipeIngredients } from '../../store'
import CreateRecipeIngredientPresenter from './CreateRecipeIngredientPresenter'

class CreateRecipeIngredientContainerClass extends Component {
    render () {
      const recipeId = this.props.match.params.id
      const {addRecipeIngredient, currentRecipe} = this.props
      return (
        currentRecipe &&
          <CreateRecipeIngredientPresenter
            addRecipeIngredient={addRecipeIngredient}
            recipeId={recipeId}
          />
      )
    }
  }

  const mapStateToProps = state => ({
    currentRecipe: state.currentRecipe,
  })

  const mapDispatchToProps = dispatch => ({
    addRecipeIngredient(recipeId, recipeIngredient) {
      console.log('IN ADD RECIPE INGREDIENT______')
      event.preventDefault()
      dispatch(postToRecipeIngredients(recipeId, recipeIngredient))
    }
  })

  const CreateRecipeIngredientContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateRecipeIngredientContainerClass))
  export default CreateRecipeIngredientContainer
