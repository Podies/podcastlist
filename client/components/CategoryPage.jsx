import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Sidebar from './Sidebar';
import Header from './Header';
import CategoryCards from './CategoryCards';

class CategoryPage extends Component {
  render() {
    return(
      <div>
        <Header {...this.props}/>
        <Sidebar {...this.props}/>
        <div className="col-md-offset-2 col-md-10" style={{marginTop: 50}}>
          <CategoryCards {...this.props.podcasts}/>
        </div>
      </div>
    )
  }
}

CategoryPage.need = [() => actions.fetchCategory(), (params) => actions.fetchPodcasts(params)];

function mapStateToProps(state) {
  return{
    categories: state.categories,
    podcasts: state.podcasts
  };
}

export default connect(mapStateToProps)(CategoryPage);
