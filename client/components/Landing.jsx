import React, {Component} from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import HomepageCards from './HomepageCards';
import * as actions from '../actions/index';

class Landing extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Header />
        <HomepageCards podcasts={this.props.podcasts} dispatch={this.props.dispatch}/>
      </div>
    )
  }
}

Landing.need = [() => actions.fetchFeaturedPodcasts(), () => actions.fetchCategory()];

function mapStateToProps(state) {
  return {
    podcasts: state.podcasts,
    categories: state.categories
  };
}

export default connect(mapStateToProps)(Landing);
