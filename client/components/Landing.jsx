import React, {Component} from 'react';
import Header from './Header';
import CategoryCads from './CategoryCads';


class Landing extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Header />
        <CategoryCads />
      </div>
    )
  }
}

export default Landing;
