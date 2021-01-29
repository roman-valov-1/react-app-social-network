import { NavLink } from 'react-router-dom';
import classes from'./Header.module.css';

const Header = (props) => {
   return (
      <header className={classes.header}>
			<img src='https://assets.awwwards.com/awards/images/2012/12/best-logo-2013-3.jpg'/>
         <div className={classes.loginBlock}>
            {props.isAuth ? props.login : <NavLink to='/login'>Login</NavLink> }
         </div>
		</header>
   )
}

export default Header;