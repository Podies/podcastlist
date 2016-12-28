import React from 'react';


const FeaturedPodcasts = (props) => {
  var featuredImage;
  if (props.index === 0) {
    featuredImage = (
      <img className="img-responsive featured-single" src={props.podcast.cover} alt={props.podcast.name} />
    )
  } else {
    featuredImage = (
      <div className="sub-featured">
        <img className="img-responsive small-image" src={props.podcast.cover} alt={props.podcast.name} />
        <h6>{props.podcast.name}</h6>
        <img className="podcast-icon" src="/images/podcast-icon.png" alt="Listen to podcast"/>
      </div>
    )
  }
  return(
    <a target="_blank" className="single-subcategory" href={`http://${props.podcast.website}`}>
    {featuredImage}
    </a>
  );
}

export default FeaturedPodcasts;
