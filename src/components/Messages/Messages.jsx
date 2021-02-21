import React from 'react';
import classes from './Messages.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Form, Field } from 'react-final-form';

const AddMessageForm = (props) => {
   return <Form
      onSubmit={props.onSubmit}
      render={({ handleSubmit }) => (
         <form onSubmit={handleSubmit}>
            <div>
               <Field name="Text" component="textarea" placeholder="Enter your message" />
            </div>
            <div>
               <button type="submit" >Send</button>
            </div>
         </form>
      )}
   />
}

const Messages = (props) => {
   let dialogesElements = props.dialogesData
      .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

   let messagesElements = props.messagesData
      .map(message => <Message message={message.message} />);

   let onSubmit = (value) => {
      props.sendNewMessage(value.Text);
   };

   return (
      <div className={classes.dialoges}>
         <div className={classes.dialogesItems}>
            {dialogesElements}
         </div>
         <div className={classes.messages}>
            {messagesElements}
            <div>
               <AddMessageForm onSubmit={onSubmit}/>
            </div>
         </div>
      </div>
   );
}



export default Messages;