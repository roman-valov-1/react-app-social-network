import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { Form, Field } from 'react-final-form';
import {required} from './../../../utils/validators/validators';
import Textarea from './../../Common/FormsControls/Textarea';

const NewPostForm = (props) => {
   return <Form 
      onSubmit={props.onSubmit}
      render = {({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
         <div className={classes.textarea}>
            <Field name="NewPostText" component={Textarea} placeholder="What's new?" 
               validate={required} />
         </div>
         <div>
            <button className={classes.button} type="submit" >Add post</button>
         </div>
      </form>
      )}
   />
}

const MyPosts = (props) => {
   let postsElements = props.postsData
      .map((post) => <Post key={post.id}
         message={post.message} 
         likesCount={post.likesCount} />).reverse();

   let onSubmit = (value) => {
      props.addPost(value.NewPostText)
      value.NewPostText = null;
   };

   return (
   <div className={classes.postsContainer}>
      { props.isOwner 
         ? <h2>My posts</h2>
         : <h2>Posts</h2> 
      }
      { props.isOwner 
         ? <NewPostForm onSubmit={onSubmit}/>
         : undefined
      }
      <div className={classes.posts}>
         {postsElements}
      </div>
   </div>
   );
}

export default MyPosts;