import Messages from './Messages';
import {
   sendNewMessageActionCreator
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
      sendNewMessage: (newMessageText) => {
         dispatch(sendNewMessageActionCreator(newMessageText));
      }
   }
}

export default compose(
   connect(mapStateToProps, mapDispatchToProps),
   withAuthRedirect
)(Messages);