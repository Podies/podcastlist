import React, { Component } from 'react';
import { Link } from 'react-router';
import FeaturedPodcasts from './FeaturedPodcasts';
import * as actions from '../actions';

class HomepageSingleCard extends Component {
  constructor(props){
    super(props);
    this.loadCategory = this.loadCategory.bind(this);
  }
  loadCategory(e){
    e.preventDefault();
    var categoryName = e.currentTarget.getAttribute('data-category');
    this.props.dispatch(actions.fetchPodcasts({category: categoryName})).then(() => {
      this.context.router.push('/'+categoryName);
    });
  }
  render(){
    var categoryName = this.props.category.name;
    return (
      <div className="col-md-2 category-item">
        <div className="featured-single">
          <h4>
          <Link to={`/${categoryName}`} onClick={this.loadCategory} data-category={categoryName} >{categoryName}</Link>
          </h4>
        </div>
        {
          this.props.podcasts.map((podcast, i) => <FeaturedPodcasts key={i} index={i} podcast={podcast} />)
        }
        <div className="text-right">
          <Link to={`/${categoryName}`} onClick={this.loadCategory} data-category={categoryName} >View All</Link>
        </div>
      </div>
    )
  }
}

HomepageSingleCard.contextTypes = {
  router: React.PropTypes.object,
}
export default HomepageSingleCard;
