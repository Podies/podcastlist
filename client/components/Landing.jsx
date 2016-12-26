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
        <HomepageCards />
      </div>
    )
  }
}

Landing.need = [() => actions.fetchFeaturedPodcasts()];

function mapStateToProps(state) {
  return{
    podcast: state.podcasts
  };
}

export default connect(mapStateToProps)(Landing);
