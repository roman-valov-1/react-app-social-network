import React from 'react';
import classes from './Users.module.css';
import userPhoto from './../../assets/images/user-default-avatar.png';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

const Users = (props) => {
   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }

   return (
      <section>
         <div>
            {pages.map(page => {
               return <span className={props.currentPage === page && classes.selectedPage}
                  onClick={(e) => { props.onPageChanged(page); }}>{page}</span>
            })}
         </div>
         {
            props.users.map(user => <div key={user.id}>
               <span>
                  <div>
                     <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null
                           ? user.photos.small : userPhoto} className={classes.avatar} />
                     </NavLink>
                  </div>
                  <div>
                     {user.followed
                        ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                           props.toggleFollowingProgress(true, user.id);
                           axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, { 
                              withCredentials: true,
                              headers: {
                                 "API-KEY": "201df3f1-e0c5-420b-8d56-d790364daf70"
                              }
                           })
                              .then(response => {
                                 if (response.data.resultCode === 0) {
                                    props.unfollow(user.id)
                                 }
                                 props.toggleFollowingProgress(false, user.id);
                              });
                        }}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                           props.toggleFollowingProgress(true, user.id);
                           axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, { 
                              withCredentials: true,
                              headers: {
                                 "API-KEY": "201df3f1-e0c5-420b-8d56-d790364daf70"
                              }
                           })
                              .then(response => {
                                 if (response.data.resultCode === 0) {
                                    props.follow(user.id)
                                 }
                                 props.toggleFollowingProgress(false, user.id);
                              });
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
      </section>
   )
}

export default Users;