import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import { getUserProfile, 
         getStatus, 
         updateStatus, 
         savePhotoToServer, 
         saveProfile
       } from './../../Redux/profile-reducer';
import {compose} from 'redux';

class ProfileContainer extends React.Component {
   
   refreshProfile() {
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = this.props.authorizedUserId;
         if(!userId) {
            this.props.history.push('/login');
         }
      }
      this.props.getUserProfile(userId);
      this.props.getStatus(userId);
   }

   componentDidMount() {
      this.refreshProfile();
   }

   componentDidUpdate(prevProps, prevState) {
      if (this.props.match.params.userId != prevProps.match.params.userId ){
         this.refreshProfile();
      }
   }

   render() {
      return <Profile {...this.props}
         isOwner={!this.props.match.params.userId} 
         profile={this.props.profile}
         status={this.props.status} 
         updateStatus={this.props.updateStatus}
         savePhotoToServer={this.props.savePhotoToServer}
         saveProfile={this.props.saveProfile} />
   }
}

let mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
   status: state.profilePage.status,
   isAuth: state.auth.isAuth,
   authorizedUserId: state.auth.userId
})

export default compose(
   connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhotoToServer, saveProfile}),
   withRouter,
)(ProfileContainer);