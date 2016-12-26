import React from 'react';
import SingleCategoryCard from './SingleCategoryCard';

const CategoryCards = (props) => {
  return(
    <div className="col-md-offset-2 col-md-10" style={{marginTop: 50}}>
      <h2 className="category-name">{props.list[0].category.name}</h2>
      {
        props.list.map((podcast, i) => <SingleCategoryCard podcast={podcast} key={i} /> )
      }
    </div>
  )
}

export default CategoryCards;
