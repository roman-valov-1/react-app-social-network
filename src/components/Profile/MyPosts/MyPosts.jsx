import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { Form, Field } from 'react-final-form';
import {required, maxLengthCreator} from './../../../utils/validators/validators';
import Textarea from './../../Common/FormsControls/Textarea';

const NewPostForm = (props) => {
   return <Form 
      onSubmit={props.onSubmit}
      render = {({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
         <div>
            <Field name="NewPostText" component={Textarea} placeholder="What's new?" 
               validate={required, maxLengthCreator(20)} />
         </div>
         <div>
            <button type="submit" >Add post</button>
         </div>
      </form>
      )}
   />
}

const MyPosts = (props) => {
   let postsElements = props.postsData
      .map((post) => <Post message={post.message} likesCount={post.likesCount} />);

   let onSubmit = (value) => {
      props.addPost(value.NewPostText);
   };

   return (<div className={classes.postsBlock}>
      <h3>My posts</h3>
      <NewPostForm onSubmit={onSubmit}/>
      <div className={classes.posts}>
         {postsElements}
      </div>
   </div>
   );
}

export default MyPosts;