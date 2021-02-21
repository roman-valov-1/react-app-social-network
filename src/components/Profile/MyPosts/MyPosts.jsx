import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { Form, Field } from 'react-final-form';

const NewPostForm = (props) => {
   return <Form 
      onSubmit={props.onSubmit}
      render = {({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
         <div>
            <Field name="NewPostText" component="textarea" placeholder="What's new?"/>
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