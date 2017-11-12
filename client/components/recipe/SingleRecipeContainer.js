import { connect } from 'react-redux'
import React, { Component } from 'react'
import { fetchCurrentRecipe, fetchRecipes } from '../../store'
import SingleRecipePresenter from './SingleRecipePresenter'

class SingleRecipeContainerClass extends Component {
  componentDidMount() {
    const id = this.props.match.params.id
    console.log('RID', id)
    this.props.getSingleRecipe(id)
  }
  render() {
    console.log('container props', this.props)
    const { currentRecipe, getSingleRecipe } = this.props
    return (
      currentRecipe &&
      <SingleRecipePresenter
      currentRecipe={currentRecipe}
      getSingleRecipe={getSingleRecipe}
      />
        )
    }
}

const mapStateToProps = state => ({
  currentRecipe: state.currentRecipe,
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  // getRecipes() {
  //   dispatch(fetchRecipes())
  // },
  getSingleRecipe (id) {
    dispatch(fetchCurrentRecipe(id))
  }
})

const SingleRecipeContainer = connect(mapStateToProps, mapDispatchToProps)(SingleRecipeContainerClass)
export default SingleRecipeContainer
