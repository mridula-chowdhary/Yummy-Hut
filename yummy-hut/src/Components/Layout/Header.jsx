import React,{Fragment} from 'react';
import classes from './Header.module.css';
import mealsImage from '../Assets/meals.jpg';
import HeaderCardButton from './HeaderCardButton';

const Header = (props) => {
return (
<Fragment>
<header className={classes.header}>
    <h1> Yummy Hut </h1>
    <HeaderCardButton/>
</header>
<div className={classes['main-image']}>
    <img src ={mealsImage} alt ='A table full of food'></img>
</div>
</Fragment>
);
};

export default Header;