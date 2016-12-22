import React, {Component} from 'react';
import Header from './Header';
import * as actions from '../actions'; 

class Landing extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Header />
        <div>
          Content here.
        </div>
      </div>
    )
  }
}

Landing.need = () => actions.fetchCategory();

export default Landing;