import classes from './Post.module.css';

const Post = (props) => {
   return (
      <div className={classes.item}>
         <img src="https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d" alt=""/>
         {props.message}
         <div>
            <span>like</span> {props.likesCount}
         </div>
      </div>
   );
}

export default Post;