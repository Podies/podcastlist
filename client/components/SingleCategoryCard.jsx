import React from 'react';
import { Link } from 'react-router';

const SingleCategoryCard = (props) => {
  return(
    <div className="single-subcategory col-md-6">
      <div className="subcategory">
          <img className="img-responsive category-page-image" src={props.podcast.cover} alt={props.podcast.name}/>
          <div className="inner-info">
            <h3>{props.podcast.name}</h3>
            <p>{props.podcast.description}</p>
            <a target="_blank" href={`${props.podcast.website}`} className="button-listen">Listen</a>
          </div>
      </div>
    </div>
  )
}

export default SingleCategoryCard;
