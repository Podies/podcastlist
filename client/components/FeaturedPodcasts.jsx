import React from 'react';
import { Link } from 'react-router';


const FeaturedPodcasts = () => {
  return(
    <Link className="single-subcategory">
      <div className="sub-featured">
          <img className="img-responsive small-image" src="http://d1vf6nydb9l6bf.cloudfront.net/uploads/podcast/cover/109319/medium_decrypted-1481680186.jpg" alt=""/>
          <h6>Sub Heading</h6>
          <img className="podcast-icon" src="/images/podcast-icon.png" alt="Listen to podcast"/>
      </div>
    </Link>
  );
}

export default FeaturedPodcasts;
