import React from 'react';
import classes from './Users.module.css';

const Users = (props) => {
   return (
      <section>
         {
            props.users.map( user => 
            <div key={user.id}>
               <span>
                  <div>
                     <img src={user.avatarUrl} className={classes.avatar}/>
                  </div>
                  <div>
                     {user.followed 
                        ? <button onClick={ () => {props.unfollow(user.id) }}>Unfollow</button> 
                        : <button onClick={ () => {props.follow(user.id) }}>Follow</button>}
                  </div>
               </span>
               <span>
                  <span>
                     <div>
                        {user.fullName}
                     </div>
                     <div>
                        {user.status}
                     </div>
                  </span>
                  <span>
                     <div>
                        {user.location.country}
                     </div>
                     <div>
                        {user.location.city}
                     </div>
                  </span>
               </span>
            </div>)
         }
      </section>
   );
}

export default Users;