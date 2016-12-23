import React from 'react';
import FeaturedPodcasts from './FeaturedPodcasts';

const SingleCategory = () => {
  return (
    <div className="col-md-2 category-item">
      <div className="featured-single">
        <h4>
        <a href="#">Health</a>
        </h4>
        <a href="#">
            <img className="img-responsive" src="http://d1vf6nydb9l6bf.cloudfront.net/uploads/podcast/cover/1540/medium_the-rich-roll-podcast-1481679776.jpg" alt="" />
        </a>
      </div>
      {
        [1,2,3].map((podcast, i) => <FeaturedPodcasts key={i} />)
      }
    </div>
  )
}

export default SingleCategory;
