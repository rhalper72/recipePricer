import { connect } from 'react-redux'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { postToRecipeIngredients, fetchIngredients } from '../../store'
import CreateRecipeIngredientPresenter from './CreateRecipeIngredientPresenter'

class CreateRecipeIngredientContainerClass extends Component {
  // componentDidMount() {
  //   this.props.getIngredients()
  // }
    render () {
      const recipeId = this.props.match.params.id
      const {addRecipeIngredient, currentRecipe, ingredients} = this.props
      // this.props.getIngredients()
      return (
        currentRecipe &&
          <CreateRecipeIngredientPresenter
            addRecipeIngredient={addRecipeIngredient}
            recipeId={recipeId}
            ingredients={ingredients}
          />
      )
    }
  }

  const mapStateToProps = state => ({
    currentRecipe: state.currentRecipe,
    ingredients: state.ingredients
  })

  const mapDispatchToProps = (dispatch, ownProps) => ({
    // getIngredients() {
    //   dispatch(fetchIngredients())
    // },
    addRecipeIngredient(recipeId, recipeIngredient) {
      console.log('IN ADD RECIPE INGREDIENT______')
      event.preventDefault()
      dispatch(postToRecipeIngredients(recipeId, recipeIngredient, ownProps.history))
    }
  })

  const CreateRecipeIngredientContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateRecipeIngredientContainerClass))
  export default CreateRecipeIngredientContainer
