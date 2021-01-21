import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
   return (
      <div>
         <div className={classes.banner}>
            <img src="https://www.lilybeachmaldives.com/wp-content/uploads/2017/09/beach-villa-beach-1030x579.jpg"/>
         </div>
         <div className={classes.descriptionBlock}>
            ava + description
         </div>
      </div>   
   );
}

export default ProfileInfo;