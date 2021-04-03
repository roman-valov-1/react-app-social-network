import React, {useState} from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from './../../Common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from './../../../assets/images/user-default-avatar.png';
import ProfileUserDataForm from './ProfileUserDataForm';

const ProfileInfo = (props) => {

   let [editMode, setEditMode] = useState(false);

   const onSubmit = (formData) => {
      console.log(formData);
      setEditMode(false);
      props.saveProfile(formData);
   }

   if (!props.profile) {
      return <Preloader />
   }
   let onMainPhotoSelected = (e) => {
      props.savePhotoToServer(e.target.files[0]);
   }
   return (
      <div>
         <div className={classes.descriptionBlock}>
            <img className={classes.image} src={props.profile.photos.large || userPhoto} alt="" />
            {props.isOwner && <div><input type={"file"} onChange={onMainPhotoSelected} /></div>}
            {editMode 
               ? <ProfileUserDataForm 
                  profile={props.profile} 
                  isOwner={props.isOwner}
                  onSubmit={onSubmit} /> 
               : <ProfileUserData 
                  profile={props.profile} 
                  isOwner={props.isOwner}
                  activateEditMode={ () => {setEditMode(true)} }/> 
            }
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
         </div>
      </div>
   );
}

const ProfileUserData = (props) => {
   return (
      <div>
         {props.isOwner && 
            <div>
               <button onClick={props.activateEditMode}>Edit</button>
            </div>
         }
         <div>
            <b>Full name:</b>{props.profile.fullName}
         </div>
         <div>
            <b>Looking for a job:</b>{props.profile.lookingForAJob ? "Yes" : "No"}
         </div>
         {props.profile.lookingForAJob &&
            <div>
               <b>My professional skills:</b>{props.profile.lookingForAJobDescription}
            </div>
         }
         <div>
            <b>About me:</b>{props.profile.aboutMe}
         </div>
         <div>
            <b>Contacts:</b>{Object.keys(props.profile.contacts).map(key => {
               return <Contact contactTitle={key} contactValue={props.profile.contacts[key]} />
            })}
         </div>
      </div>
   )
}

const Contact = ({ contactTitle, contactValue }) => {
   return <div className={classes.contact}><b>{contactTitle}:</b> {contactValue}</div>
}

export default ProfileInfo;