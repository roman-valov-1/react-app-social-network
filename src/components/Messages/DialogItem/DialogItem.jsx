import classes from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
   let path = "/messages/" + props.id;

   return (
      <div className={classes.item}>
         <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
      </div>
   );
}

export default DialogItem;