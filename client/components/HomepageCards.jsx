import React from 'react';
import HomepageSingleCard from './HomepageSingleCard';

const HomepageCards = (props) => {
  return(
    <div className="container padding-home">
      {
        props.podcasts.featured.map((podcasts, i) => {
          return (
            <HomepageSingleCard
              key={i}
              podcasts={podcasts.podcast}
              category={podcasts._id}
              dispatch={props.dispatch}/>
          );
        })
      }
    </div>
  )
}

export default HomepageCards;
