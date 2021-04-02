import React, {useState} from 'react';
import classes from './Paginator.module.css';

const Paginator = (props) => {
   let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);

   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }

   let pagesPerGroup = 10;
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
            <button
               disabled={paginationLeftButtonDisabled(groupPagesNumber)} 
               onClick={() => {setGroupPagesNumber(groupPagesNumber - 1)} }>Prev</button>
            {pages
               .filter(group => group >= leftGroupPagesLimit && group <= rightGroupPagesLimit)
               .map(page => {
               return <span 
                  className={(props.currentPage === page && classes.selectedPage)}
                  onClick={(e) => { props.onPageChanged(page); }}>{page}</span>
            })}
            <button
               disabled={paginationRightButtonDisabled(groupPagesNumber)} 
               onClick={() => {setGroupPagesNumber(groupPagesNumber + 1)} }>Next</button>
         </div>
   )
}

export default Paginator;