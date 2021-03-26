import profileReducer, {addPostActionCreator, deletePost} from './profile-reducer';

let state = {
   postsData: [
      { id: 1, message: "Hi, how are you?", likesCount: 2 },
      { id: 2, message: "It's my first post", likesCount: 223 }
   ]
}

it('length of posts should be incremented', () => {
   let action = addPostActionCreator('111');

   let newState = profileReducer(state, action);

   expect(newState.postsData.length).toBe(3);
});

it('length of posts should be decremented', () => {
   let action = deletePost(1);

   let newState = profileReducer(state, action);

   expect(newState.postsData.length).toBe(1);
});

it("length of posts shouldn't be changed if id is incorrect", () => {
   let action = deletePost(1000);

   let newState = profileReducer(state, action);

   expect(newState.postsData.length).toBe(2);
});
