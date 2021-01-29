import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
   return (
      <section>
         <ProfileInfo profile={props.profile}/>
         <MyPostsContainer />
      </section>
   );
}

export default Profile;