const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
   dialogesData: [
      { id: 1, name: 'Username 1' },
      { id: 2, name: 'Username 2' },
      { id: 3, name: 'Username 3' },
      { id: 4, name: 'Username 4' },
      { id: 5, name: 'Username 5' }
   ],
   messagesData: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "Yo" },
      { id: 4, message: "Yo" },
      { id: 5, message: "Yo" }
   ],
   newMessageText: ''
}

const messagesReducer = (state = initialState, action) => {
   // let stateCopy;

   switch (action.type) {
      case SEND_NEW_MESSAGE:
         let messageText = state.newMessageText;
         
         return {
            ...state,
            newMessageText: '',
            messagesData: [...state.messagesData, { id: 6, message: messageText }]
         };
      case UPDATE_NEW_MESSAGE_TEXT:
         return {
            ...state,
            newMessageText: action.newText
         }
      default:
         return state;
   }
}

export const sendNewMessageActionCreator = () => {
   return { type: SEND_NEW_MESSAGE }
}

export const updateNewMessageTextActionCreator = (text) => {
   return {
      type: UPDATE_NEW_MESSAGE_TEXT,
      newText: text
   }
}

export default messagesReducer;