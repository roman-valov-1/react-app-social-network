const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';

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
      { id: 3, message: "Yo" }
   ]
}

const messagesReducer = (state = initialState, action) => {
   switch (action.type) {
      case SEND_NEW_MESSAGE:
         let messageText = action.newMessageText;
         
         return {
            ...state,
            messagesData: [...state.messagesData, { id: 6, message: messageText }]
         };
      default:
         return state;
   }
}

export const sendNewMessageActionCreator = (newMessageText) => {
   return { type: SEND_NEW_MESSAGE, newMessageText}
}


export default messagesReducer;