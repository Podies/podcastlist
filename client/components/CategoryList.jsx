import React from 'react';
import SingleCategory from './SingleCategory';

const CategoryList = () => {
  return(
    <div className="container">
        {
          [1,2,3,4,5,6,7,8,9].map((podcast, i) => <SingleCategory key={i} />)
        }
    </div>
  )
}

export default CategoryList;
