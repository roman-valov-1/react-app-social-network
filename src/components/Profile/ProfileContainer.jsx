import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import {getUserProfile, getStatus, updateStatus} from './../../Redux/profile-reducer';
import {compose} from 'redux';

class ProfileContainer extends React.Component {
   
   componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = this.props.authorizedUserId;
      }
      this.props.getUserProfile(userId);
      this.props.getStatus(userId);
   }

   render() {
      return <Profile {...this.props} 
         profile={this.props.profile}
         status={this.props.status} 
         updateStatus={this.props.updateStatus} />
   }
}

let mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
   status: state.profilePage.status,
   isAuth: state.auth.isAuth,
   authorizedUserId: state.auth.userId
})

export default compose(
   connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
   withRouter,
)(ProfileContainer);