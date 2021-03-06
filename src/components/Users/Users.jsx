import classes from './Users.module.css';
import React from 'react';
import Paginator from './../Common/Paginator/Paginator';
import User from './User';

const Users = (props) => {

   return (
      <section className={classes.usersContainer}>
         <Paginator totalItemsCount={props.totalUsersCount} 
            pageSize={props.pageSize} 
            currentPage={props.currentPage}
            onPageChanged={props.onPageChanged}/>
         <div className={classes.usersList}>
            {
               props.users.map(user => 
                  <User user={user} 
                     key={user.id}
                     followingInProgress={props.followingInProgress}
                     unfollow={props.unfollow}
                     follow={props.follow}/>
               )
            }
         </div>   
      </section>
   )
}

export default Users;