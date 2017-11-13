import React from 'react';
import { NavLink } from 'react-router-dom';


const LandingPage = () => {
  return (
    <div>
      {/* <section className="section"> */}
        <div className="container">
          <div>
            <h3 className="title is-3">Recipe Pricer</h3>
          </div>
          <div>
            <figure >
              <img src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/22310457_10208970591415160_2135282077175847140_n.jpg?oh=ae1212aa46528bdc4b728060f1905b90&oe=5AAF9EA5" className="landing-img" />
            </figure>
          </div>
        </div>
      {/* </section> */}
      {/* <section className="section"> */}
        <div className="container">
          <p>Have you ever wanted to know how much a recipe will cost you to make?</p>
          <p>Did you want to know exactly how much you made (or lost) on that batch of cupcakes you sold to a friend for their party?</p>
          <p>Well you have come to the right place. Just click the button below to get started entering and pricing out your recipes.</p>
          <NavLink to="/newRecipe" className="button is-link is-medium">Add A Recipe</NavLink>
        </div>
      {/* </section> */}
    </div>
  )
}
export default LandingPage
