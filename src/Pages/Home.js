import React, {Component} from 'react';

import './Home.css';
import Header from '../components/Header'
import Cards from '../components/Cards';

class Home extends Component {
  render() {
    return (
      <div>
          <div className = "RightPage">
            <Cards/>
          </div>
          <div className = "LeftPage">
            <Header/>
          </div>
          {/* <img alt="" src={HealthImage} className="HealthImage" /> */}
      </div>
    );
  }
}

export default Home;