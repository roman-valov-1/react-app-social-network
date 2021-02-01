import Messages from './Messages';
import {
   sendNewMessageActionCreator,
   updateNewMessageTextActionCreator
} from '../../Redux/messages-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

let mapStateToProps = (state) => {
   return {
      dialogesData: state.messagesPage.dialogesData,
      messagesData: state.messagesPage.messagesData,
      newMessageText: state.messagesPage.newMessageText,
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

export default compose(
   connect(mapStateToProps, mapDispatchToProps),
   withAuthRedirect
)(Messages);