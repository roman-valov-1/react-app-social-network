import React from 'react';
import userPhoto from './../../assets/images/user-default-avatar.png';
import { NavLink } from 'react-router-dom';
import classes from './Users.module.css';

const User = (props) => {
   let user = props.user;
   return (
      <div>
         <span>
            <div>
               <NavLink to={'/profile/' + user.id}>
                  <img src={user.photos.small != null
                     ? user.photos.small : userPhoto} className={classes.avatar} />
               </NavLink>
            </div>
            <div>
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
         </span>
         <span>
            <span>
               <div>
                  {user.name}
               </div>
               <div>
                  {user.status}
               </div>
            </span>
            <span>
               <div>
                  {"user.location.country"}
               </div>
               <div>
                  {"user.location.city"}
               </div>
            </span>
         </span>
      </div>      
   )
}

export default User;