import React, { useEffect, useState } from 'react';
import classes from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

   let [editMode, setEditMode] = useState(false);
   let [status, setStatus] = useState(props.status);

   useEffect( () => {
      setStatus(props.status)
   }, [props.status] );

   const activateEditMode = () => {
      if (props.isOwner === true) {
         setEditMode(true);
      }
   }
   const deactivateEditMode = () => {
      setEditMode(false);
      props.updateStatus(status);
   }
   const onStatusChange = (e) => {
      setStatus(e.currentTarget.value);
   }

   return (
      <div>
         { !editMode &&
            <div className={classes.profileStatus}>
               <span onClick={activateEditMode}>{props.status || "Status"}</span>
            </div>
         }
         { editMode  &&
            <div className={classes.profileStatusEdit}>
               <textarea 
               onChange={onStatusChange} 
               onBlur={deactivateEditMode} 
               autoFocus={true}
               value={status}></textarea>
            </div>
         }
      </div>
   )
}

export default ProfileStatusWithHooks;