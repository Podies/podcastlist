import React from 'react';
import SingleCategoryCard from './SingleCategoryCard';

const CategoryCards = (props) => {
  var listPodcasts;
  if (props.list.length) {
    listPodcasts = (
      <div>
        {
          props.list.map((podcast, i) => <SingleCategoryCard podcast={podcast} key={i} /> )
        }
      </div>
    )
  } else{
      listPodcasts = (
      <h4 className="text-center">No Podcasts Available!</h4>
    )
  }
  return(
    <div>
      <h2 className="category-name">{props.category.name}</h2>
      {listPodcasts}
    </div>
  )
}

export default CategoryCards;
