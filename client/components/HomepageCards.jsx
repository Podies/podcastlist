import React from 'react';
import HomepageSingleCard from './HomepageSingleCard';

const HomepageCards = () => {
  return(
    <div className="container">
        {
          [1,2,3,4,5,6,7,8,9].map((podcast, i) => <HomepageSingleCard key={i} />)
        }
    </div>
  )
}

export default HomepageCards;
