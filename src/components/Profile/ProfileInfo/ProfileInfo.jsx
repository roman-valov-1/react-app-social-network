import classes from './ProfileInfo.module.css';
import Preloader from './../../Common/Preloader/Preloader';

const ProfileInfo = (props) => {
   if(!props.profile){
      return <Preloader />
   }
   return (
      <div>
         <div className={classes.descriptionBlock}>
            <img src={props.profile.photos.large} alt=""/>
            ava + description
         </div>
      </div>   
   );
}

export default ProfileInfo;