import React from 'react';
import userPhoto from './../../assets/images/user-default-avatar.png';
import { NavLink } from 'react-router-dom';
import classes from './Users.module.css';

const User = (props) => {
   let user = props.user;
   return (
      <div className={classes.userItem}>
         <div className={classes.userAvatarBlock}>
            <div>
               <NavLink to={'/profile/' + user.id}>
                  <img src={user.photos.small != null
                     ? user.photos.small : userPhoto} className={classes.avatar} />
               </NavLink>
            </div>
            <div className={classes.button}>
               {user.followed
                  ? <button disabled={props.followingInProgress
                     .some(id => id === user.id)} onClick={() => {
                        props.unfollow(user.id);
                     }}>Unfollow</button>
                  : <button disabled={props.followingInProgress
                     .some(id => id === user.id)} onClick={() => {
                        props.follow(user.id);
                     }}>Follow</button>}
            </div>
         </div>
         <div className={classes.userDescription}>
            <span>
               <b>FullName: </b>{user.name}
            </span>
            <span>
               <b>Status: </b>{user.status}
            </span>
         </div>  
      </div>      
   )
}

export default User;