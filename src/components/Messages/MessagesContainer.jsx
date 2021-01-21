import Messages from './Messages';
import {
   sendNewMessageActionCreator,
   updateNewMessageTextActionCreator
} from '../../Redux/messages-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
   return {
      dialogesData: state.messagesPage.dialogesData,
      messagesData: state.messagesPage.messagesData,
      newMessageText: state.messagesPage.newMessageText
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      sendNewMessage: () => {
         dispatch(sendNewMessageActionCreator());
      },
      updateNewMessageText: (text) => {
         dispatch(updateNewMessageTextActionCreator(text));
      }
   }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;