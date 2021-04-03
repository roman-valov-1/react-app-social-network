import classes from './../ProfileInfo/ProfileInfo.module.css';
import React from 'react';
import { Form, Field } from 'react-final-form';

const ProfileUserDataForm = (props) => (
   <Form
      onSubmit={props.onSubmit}
      initialValues={props.profile}
      render={({ handleSubmit }) => (
         <form onSubmit={handleSubmit}>
            <div>
               Full name: <Field name="fullName" component={Input} placeholder="Full name" />
            </div>
            <div>
               Looking for a job: <Field name="lookingForAJob" component="input" type="checkbox" />
            </div>
            <div>
               My professional skills:
                  <Field name="lookingForAJobDescription"
                  component={Textarea}
                  placeholder="Describe your skills" />
            </div>
            <div>
               About me:
                  <Field name="aboutMe"
                  component={Textarea}
                  placeholder="Information about you" />
            </div>
            <div>
               Contacts: {Object.keys(props.profile.contacts).map(key => {
                  return <div className={classes.contact}>
                     {key}: 
                     <div>
                        <Field name={"contacts." + key} component="input" placeholder={key} />
                     </div>
                  </div>
               })}
            </div>
            <div>
               <button type="submit">Save</button>
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