import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import {getUserProfile} from './../../Redux/profile-reducer';

class ProfileContainer extends React.Component {
   
   componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = 14593;
      }
      this.props.getUserProfile(userId);
   }

   render() {
      return <Profile {...this.props} profile={this.props.profile}/>
   }
}

let mapStateToProps = (state) => ({
   profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);