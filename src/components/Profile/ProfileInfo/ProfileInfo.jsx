import classes from './ProfileInfo.module.css';
import Preloader from './../../Common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
   if(!props.profile){
      return <Preloader />
   }
   return (
      <div>
         <div className={classes.descriptionBlock}>
            <img className={classes.image} src={props.profile.photos.large} alt=""/>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
         </div>
      </div>   
   );
}

export default ProfileInfo;