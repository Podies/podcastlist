import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import * as actions from '../actions';
import SubscribeGrid from './SubscribeGrid';
import * as ajaxCalls from '../actions/ajaxCalls';
import Success from './Success';

class SubscribePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedCategories: [],
    };
    this.subscribeSubmit = this.subscribeSubmit.bind(this);
    this.toggleCategorySelect = this.toggleCategorySelect.bind(this);
  }

  toggleCategorySelect(categoryId) {
  // toggle from current state
  const index = this.state.selectedCategories.indexOf(categoryId);
  if (index === -1) {
    this.state.selectedCategories.push(categoryId);
  } else {
    this.state.selectedCategories.splice(index, 1);
  }
  this.setState({ selectedCategories: this.state.selectedCategories });
  }

  subscribeSubmit(e){
    e.preventDefault();
    const email = this.refs.subscribeEmail.value;
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var check = re.test(email);
    if (check) {
      ajaxCalls.ajaxSubscribe({ email, categories: this.state.selectedCategories }).then((res) => {
        alert("Submitted Successfully")
        this.context.router.push('/');
      });
    } else {
      alert('Invalid Email Address');
    }
  }
  render(){
    return(
      <div>
        <Header {...this.props}/>
        <div className="container padding-home col-md-offset-1">
          {
            this.props.categories.list.map((category, i) =>
              <SubscribeGrid
              key={i}
              category={category}
              toggleCategorySelect={this.toggleCategorySelect}
              selectedCategories={this.state.selectedCategories}
              />)
          }
        </div>
        <div className="email-subscription col-md-4 col-md-offset-4">
          <input className="form-control email-input" ref="subscribeEmail" placeholder="Enter your email" type="email" name="search" id="search" />
          <input className="form-control subscribe-btn" type="submit" onClick={this.subscribeSubmit} value="Subscribe" />
        </div>
      </div>
    )
  }
}

SubscribePage.need = [() => actions.fetchCategory(), () => actions.fetchFeaturedPodcasts()];

SubscribePage.contextTypes = {
  router: React.PropTypes.object,
}

function mapStateToProps(state) {
  return {
    categories: state.categories,
  };
}
export default connect(mapStateToProps)(SubscribePage);
