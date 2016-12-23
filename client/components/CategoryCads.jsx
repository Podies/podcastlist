import React from 'react';
import SingleCategoryCard from './SingleCategoryCard';

const CategoryCads = () => {
  return(
    <div className="container">
        {
          [1,2,3,4,5,6,7,8,9].map((podcast, i) => <SingleCategoryCard key={i} />)
        }
    </div>
  )
}

export default CategoryCads;
