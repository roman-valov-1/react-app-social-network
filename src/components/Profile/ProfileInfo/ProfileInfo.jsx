import classes from './ProfileInfo.module.css';
import Preloader from './../../Common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from './../../../assets/images/user-default-avatar.png';

const ProfileInfo = (props) => {
   if(!props.profile){
      return <Preloader />
   }
   let onMainPhotoSelected = (e) => {
      props.savePhotoToServer(e.target.files[0]);
   }
   return (
      <div>
         <div className={classes.descriptionBlock}>
            <img className={classes.image} src={props.profile.photos.large || userPhoto} alt=""/>
            { props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/> }
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
         </div>
      </div>   
   );
}

export default ProfileInfo;