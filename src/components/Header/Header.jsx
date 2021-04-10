import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
   return (
      <header className={classes.headerWrapper}>
         <div className={classes.headerContent}>
            <div className={classes.headerFlexContainer}>
               <div className={classes.logo}>React Social Network</div>
               <div className={classes.loginBlock}>
                  {props.isAuth
                     ? <div><button onClick={props.logout}>Log out</button></div>
                     : <NavLink to='/login'>Login</NavLink>}
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header;