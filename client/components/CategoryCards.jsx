import React from 'react';
import SingleCategoryCard from './SingleCategoryCard';

const CategoryCards = () => {
  return(
    <div className="col-md-offset-2 col-md-10" style={{marginTop: 50}}>
      <h2 className="category-name">Health</h2>
      {
        [1,2,3,4,5,6,7,8].map((podcast, i) => <SingleCategoryCard key={i} /> )
      }
    </div>
  )
}

export default CategoryCards;
