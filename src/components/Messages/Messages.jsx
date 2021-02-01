import React from 'react';
import classes from './Messages.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Redirect} from 'react-router-dom';

const Messages = (props) => {
   let dialogesElements = props.dialogesData
      .map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );

   let messagesElements = props.messagesData
      .map( message => <Message message={message.message}/>);
   
   let onMessageChange = (e) => {
      let text = e.target.value;
      props.updateNewMessageText(text);
   }
   let onSendNewMessage = () => {
      props.sendNewMessage();
   };

   if (!props.isAuth) return <Redirect to={'/login'} />

   return (
      <div className={classes.dialoges}>
         <div className={classes.dialogesItems}>
            {dialogesElements}
         </div>
         <div className={classes.messages}>
            {messagesElements}
            <div>
               <div>
                  <textarea onChange={onMessageChange} 
                  value={props.newMessageText} />
               </div>
               <button onClick={onSendNewMessage}>Send</button>
            </div>
         </div>
      </div>
   );
}

export default Messages;