import React, {Component} from 'react';
import Header from './Header';
import HomepageCards from './HomepageCards';


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

export default Landing;
