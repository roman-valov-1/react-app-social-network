import classes from './ProfileInfo.module.css';
import Preloader from './../../Common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
   if(!props.profile){
      return <Preloader />
   }
   return (
      <div>
         <div className={classes.descriptionBlock}>
            <img className={classes.image} src={props.profile.photos.large} alt=""/>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
         </div>
      </div>   
   );
}

export default ProfileInfo;