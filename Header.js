import React, { Fragment } from 'react'
import classes from './Header.module.css'

export default function Header() {
  return (
    <Fragment>
      <header className={classes.header}>
      <h1>MealHub<button >ADD TO CART</button></h1>
      
      </header>
     
      <div className={classes['main-image']}>
        <img src="https://img.freepik.com/free-vector/gradient-indian-restaurant-sale-banner_23-2149440854.jpg?w=740&t=st=1689615988~exp=1689616588~hmac=f27df03eb9c2680fe893c90e2d463d2a6492d418789685d5c5dc9bac6d53c8f6" alt="" />
      </div>
        
   

    </Fragment>
  )
}
