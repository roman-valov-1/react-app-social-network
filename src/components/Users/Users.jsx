import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import userPhoto from './../../assets/images/user-default-avatar.png';

class Users extends React.Component {
   componentDidMount() {
      axios.get("https://social-network.samuraijs.com/api/1.0/users")
         .then(response => {
            this.props.setUsers(response.data.items);
      });
   }
   render() {
      return (
         <section>
            {/* <button onClick={this.getUsers}>Get Users</button> */}
            {
               this.props.users.map(user =>
                  <div key={user.id}>
                     <span>
                        <div>
                           <img src={user.photos.small != null
                              ? user.photos.small : userPhoto} className={classes.avatar} />
                        </div>
                        <div>
                           {user.followed
                              ? <button onClick={() => { this.props.unfollow(user.id) }}>Unfollow</button>
                              : <button onClick={() => { this.props.follow(user.id) }}>Follow</button>}
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
                  </div>)
            }
         </section>
      );
   }
}

export default Users;