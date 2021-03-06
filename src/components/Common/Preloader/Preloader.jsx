import React from 'react';
import preloader from './../../../assets/images/preloader.svg';
import classes from './Preloader.module.css'

const Preloader = (props) => {
   return (
      <div className={classes.preloaderContainer}>
         <div className={classes.preloader}>
            <img src={preloader}></img>
         </div>
      </div>
   )
}

export default Preloader;