import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props){
    super(props);
    this.searchInPodcasts = this.searchInPodcasts.bind(this);
  }
  searchInPodcasts(e) {
    if(e.keyCode == 13) {
      this.props.dispatch(actions.searchPodcasts(this.refs.searchText.value)).then(() => {
      this.context.router.push('/search?text='+this.refs.searchText.value);
      });
    }
  }
  render(){
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
              <a className="navbar-brand" href="/">Podcasts List</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li>
                <a href="/subscribe">Subscribe Podcast</a>
              </li>
            </ul>
            <div className="col-sm-3 col-md-3 pull-right">
            <div className="input-group search-box">
              <input type="text" className="search-box"
                ref="searchText" placeholder="Search"
                onKeyDown={this.searchInPodcasts} />
            </div>
          </div>
          </div>
        </div>
      </nav>
    )
  }
}

Header.contextTypes= {
  router: React.PropTypes.object,
}


export default Header;
