import { connect } from 'react-redux'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { postToRecipes } from '../../store'
import CreateRecipePresenter from './CreateRecipePresenter'

class CreateRecipeContainerClass extends Component {
  render () {

    const {user, addRecipe} = this.props
    console.log('______user______', user)
    return (
      this.props.recipes &&
        <CreateRecipePresenter
          user={user}
          addRecipe={addRecipe}
        />
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  recipes: state.recipes
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  addRecipe(userId, recipe) {
    console.log('IN ADD RECIPE______')
    event.preventDefault()
    dispatch(postToRecipes(userId, recipe, ownProps.history))
  }
})

const CreateRecipeContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateRecipeContainerClass))
export default CreateRecipeContainer
