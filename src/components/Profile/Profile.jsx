import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
   return (
      <section>
         <ProfileInfo 
            isOwner={props.isOwner} 
            profile={props.profile} 
            status={props.status} 
            updateStatus={props.updateStatus} 
            savePhotoToServer={props.savePhotoToServer}
            saveProfile={props.saveProfile}/>
         <MyPostsContainer />
      </section>
   );
}

export default Profile;