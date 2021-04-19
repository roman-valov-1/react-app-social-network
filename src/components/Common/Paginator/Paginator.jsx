import React, {useEffect, useState} from 'react';
import classes from './Paginator.module.css';

const Paginator = (props) => {
   let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);

   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }
   
   let pagesPerGroup = 5;

   let totalPagesGroupCount = Math.ceil(pagesCount / pagesPerGroup);

   let [groupPagesNumber, setGroupPagesNumber] = useState(1);
   let leftGroupPagesLimit = (groupPagesNumber - 1) * pagesPerGroup + 1;
   let rightGroupPagesLimit = groupPagesNumber * pagesPerGroup;
   let paginationLeftButtonDisabled = (groupPagesNumber) => {
      return (groupPagesNumber - 1) === 0 ;
   }
   let paginationRightButtonDisabled = (groupPagesNumber) => {
      return groupPagesNumber === totalPagesGroupCount;
   }

   return (
         <div className={classes.paginationItem}>
            
            <div className={classes.paginationList}>
               {pages
                  .filter(group => group >= leftGroupPagesLimit && group <= rightGroupPagesLimit)
                  .map(page => {
                  return <span key={page}
                     className={(props.currentPage === page ? classes.selectedPage : undefined)}
                     onClick={(e) => { props.onPageChanged(page); }}>{page}</span>
               })}
            </div>
            <div className={classes.buttonsBlock}>
               <div className={classes.buttonPrev}>
                  <button
                     disabled={paginationLeftButtonDisabled(groupPagesNumber)} 
                     onClick={() => {setGroupPagesNumber(groupPagesNumber - 1)} }>Prev</button>
               </div>
               <div className={classes.buttonNext}>
               <button
                  disabled={paginationRightButtonDisabled(groupPagesNumber)} 
                  onClick={() => {setGroupPagesNumber(groupPagesNumber + 1)} }>Next</button>
               </div>
            </div>
         </div>
   )
}

export default Paginator;