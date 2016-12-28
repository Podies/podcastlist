import React, { Component } from 'react';
import Header from './Header';
import CategoryCards from './CategoryCards';
import { connect } from 'react-redux';

class SearchPage extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <Header {...this.props} />
        <CategoryCards {...this.props.podcasts} />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    podcasts: state.podcasts,
  };
}

export default connect(mapStateToProps)(SearchPage);
