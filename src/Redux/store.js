import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';

let store = {
   _state: {
      profilePage: {
         postsData: [
            {id: 1, message: "Hi, how are you?", likesCount: 2},
            {id: 2, message: "It's my first post", likesCount: 223}
         ],
         newPostText: ''
      },
      messagesPage: {
         dialogesData: [
            {id: 1, name: 'Username 1'},
            {id: 2, name: 'Username 2'},
            {id: 3, name: 'Username 3'},
            {id: 4, name: 'Username 4'},
            {id: 5, name: 'Username 5'}
         ],
         messagesData: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "Yo"},
            {id: 4, message: "Yo"},
            {id: 5, message: "Yo"}
         ],
         newMessageText: ''
      }
   },
   _callSubscriber() {
      console.log('111');
   },
   getState() {
      return (this._state);
   },
   subscribe(observer) {
      this._callSubscriber = observer;
   },
   dispatch(action) {
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
      
      this._callSubscriber(this._state);
   }
}

export default store;