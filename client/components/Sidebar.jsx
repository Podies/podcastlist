import React, { Component } from 'react';
import { Link } from 'react-router';
import * as actions from '../actions';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.loadCategoryData = this.loadCategoryData.bind(this);
  }
  loadCategoryData(e){
    e.preventDefault();
    const categoryName = e.currentTarget.getAttribute('data-category');
    this.props.dispatch(actions.fetchPodcasts({category: categoryName}))
      .then(() => {
        this.context.router.push('/'+categoryName);
      });
  }
  render() {
    return(
       <div id="sidebar-wrapper" className="col-md-2">
          <ul className="sidebar-nav">
            {
              this.props.categories.list.map((category, i) => (
                <li key={i}>
                  <Link
                    to={`/${category.name}`}
                    data-category={category.name}
                    onClick={this.loadCategoryData}
                    >
                    {category.name}
                  </Link>
                </li>
              ))
            }
          </ul>
      </div>
    )
  }
}

Sidebar.contextTypes = {
  router: React.PropTypes.object,
}
export default Sidebar;
