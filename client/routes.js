import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {Router} from 'react-router'
import {Route, Switch, withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
// import history from './history'
import {Main, Login, Signup, UserHome, LandingPage, CreateRecipeContainer, SingleRecipeContainer, CreateRecipeIngredientContainer} from './components'
import {me} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount () {
    this.props.loadInitialData()
  }

  render () {
    const {isLoggedIn} = this.props

    return (
      <div>
        <Main>
          <Switch>
            {/* Routes placed here are available to all visitors */}
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            {
              isLoggedIn &&
                <Switch>
                  {/* Routes placed here are only available after logging in */}
                  <Route exact path='/home' component={UserHome} />
                  <Route exact path='/landing' component={LandingPage} />
                  <Route exact path='/newRecipe' component={CreateRecipeContainer} />
                  <Route exact path='/recipe/:id' component={SingleRecipeContainer} />
                  <Route exact path='/recipe/:id/addIngredient' component={CreateRecipeIngredientContainer} />
                  <Route exact path='/recipe/:id/addIngredient/:ingredientId' component={CreateRecipeIngredientContainer} />
                </Switch>
            }
            {/* Displays our Login component as a fallback */}
            <Route component={Login} />
          </Switch>
        </Main>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(me())
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
