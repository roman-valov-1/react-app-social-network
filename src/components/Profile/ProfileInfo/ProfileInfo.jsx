import classes from './ProfileInfo.module.css';
import Preloader from './../../Common/Preloader/Preloader';

const ProfileInfo = (props) => {
   if(!props.profile){
      return <Preloader />
   }
   return (
      <div>
         <div className={classes.banner}>
            <img src="https://www.lilybeachmaldives.com/wp-content/uploads/2017/09/beach-villa-beach-1030x579.jpg"/>
         </div>
         <div className={classes.descriptionBlock}>
            <img src={props.profile.photos.large} alt=""/>
            ava + description
         </div>
      </div>   
   );
}

export default ProfileInfo;