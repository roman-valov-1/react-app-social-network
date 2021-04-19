import classes from './../ProfileInfo/ProfileInfo.module.css';
import React from 'react';
import { Form, Field } from 'react-final-form';

const ProfileUserDataForm = (props) => (
   <Form
      onSubmit={props.onSubmit}
      initialValues={props.profile}
      render={({ handleSubmit }) => (
         <form onSubmit={handleSubmit}>
            <div className={classes.profileUserDataItem}>
               Full name: <Field name="fullName" component={Input} placeholder="Full name" />
            </div>
            <div className={classes.profileUserDataItem}>
               Looking for a job: <Field name="lookingForAJob" component="input" type="checkbox" />
            </div>
            <div className={classes.profileUserDataItem}>
               My professional skills:
                  <Field name="lookingForAJobDescription"
                  component={Textarea}
                  placeholder="Describe your skills" />
            </div>
            <div className={classes.profileUserDataItem}>
               About me:
                  <Field name="aboutMe"
                  component={Textarea}
                  placeholder="Information about you" />
            </div>
            <div className={classes.profileUserDataItem}>
               Contacts: {Object.keys(props.profile.contacts).map(key => {
                  return <div key={key} className={classes.contact}>
                     {key}: 
                     <div>
                        <Field name={"contacts." + key} component="input" placeholder={key} />
                     </div>
                  </div>
               })}
            </div>
            <div>
               <button className={classes.button}type="submit">Save</button>
            </div>
         </form>
      )}
   />
)

const Input = ({ input, ...props }) => {
   return (
      <div>
         <input {...input} {...props} />
      </div>
   )
}

const Textarea = ({ input, ...props }) => {
   return (
      <div>
         <textarea {...input} {...props} />
      </div>
   )
}

export default ProfileUserDataForm;