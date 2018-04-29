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
              <img src="https://s3.amazonaws.com/digitalgov/_legacy-img/2016/05/600-x-360-Background-with-the-ingredients-for-a-cake-MaksimVasic-iStock-Thinkstock-464617462.jpg" className="landing-img" />
            </figure>
          </div>
        </div>
      {/* </section> */}
      {/* <section className="section"> */}
        <div className="container">
          <p>Have you ever wanted to know how much a recipe will cost you to make?</p>
          <p>Did you want to know exactly how much you made (or lost) on that batch of cupcakes a friend paid you to make for their party?</p>
          <p>Well you have come to the right place. Just click the button below to get started entering and pricing out your recipes.</p>
          <NavLink to="/newRecipe" className="button is-link is-medium">Add A Recipe</NavLink>
        </div>
      {/* </section> */}
    </div>
  )
}
export default LandingPage
