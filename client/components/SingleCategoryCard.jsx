import React from 'react';
import { Link } from 'react-router';

const SingleCategoryCard = () => {
  return(
    <div className="single-subcategory col-md-6">
      <div className="subcategory">
          <img className="img-responsive category-page-image" src="http://d1vf6nydb9l6bf.cloudfront.net/uploads/podcast/cover/109319/medium_decrypted-1481680186.jpg" alt=""/>
          <div className="inner-info">
            <h3>Sub Heading</h3>
            <p>The first scripted series from Gimlet Media, starring Catherine Keener, Oscar Isaac, David Schwimmer, David Cross</p>
            <button className="button-listen">Listen</button>
          </div>
      </div>
    </div>
  )
}

export default SingleCategoryCard;
