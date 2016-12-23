import React, {Component} from 'react';
import Header from './Header';
import CategoryList from './CategoryList';


class Landing extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Header />
        <CategoryList />
      </div>
    )
  }
}

export default Landing;
