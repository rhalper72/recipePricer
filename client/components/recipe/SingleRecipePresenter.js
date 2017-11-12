import React from 'react'
import { NavLink } from 'react-router-dom'

const SingleRecipePresenter = (props) => {
  const { currentRecipe } = props
  console.log('-----props----', props)
  return (
    <div>
      <section className="section">
        <div className="container">
          <div>
            <h1 className="title is-1">{currentRecipe.name}</h1>
          </div>
          <div>
            <figure className="image is-128x128">
              <img src={currentRecipe.image} />
            </figure>
          </div>
        </div>
      </section>
      {/* <section className="section">

      </section> */}
    </div>
  )
}

export default SingleRecipePresenter
