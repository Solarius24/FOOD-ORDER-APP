import React from 'react'
import mealsImage from "../../assets/meals.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton"

const Header = () => {
  return (
<React.Fragment>
    <header className={classes.header}>
        <h1>ReactMeals</h1>
<HeaderCartButton/>
    </header>
    <div className={classes['main-image']}>
        <img alt='A table full of delishos food' src = {mealsImage}/>
    </div>

</React.Fragment>
  )
}

export default Header
