import { connect } from 'react-redux'
import React, { Component } from 'react'
import { fetchIngredients, fetchCurrentRecipe, fetchIngredientsForRecipe } from '../../store'
import { withRouter } from 'react-router-dom'
import SingleRecipePresenter from './SingleRecipePresenter'

class SingleRecipeContainerClass extends Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getIngredients()
    this.props.getSingleRecipe(id)
    this.props.getIngredientsForRecipe(id)
  }
  render() {
    console.log('container props', this.props)
    const { currentRecipe, recipeIngredients, ingredients } = this.props
    return (
      currentRecipe &&
      <SingleRecipePresenter
        currentRecipe={currentRecipe}
        recipeIngredients={recipeIngredients}
        ingredients={ingredients}
      />
    )
  }
}

const mapStateToProps = state => ({
  currentRecipe: state.currentRecipe,
  recipeIngredients: state.recipeIngredients,
  ingredients: state.ingredients,
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  getSingleRecipe(id) {
    dispatch(fetchCurrentRecipe(id))
  },
  getIngredients() {
    dispatch(fetchIngredients())
  },
  getIngredientsForRecipe(id) {
    dispatch(fetchIngredientsForRecipe(id))
  },
})

const SingleRecipeContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleRecipeContainerClass))
export default SingleRecipeContainer
