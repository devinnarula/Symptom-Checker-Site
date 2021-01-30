import React, {Component} from 'react';
import { Link } from 'react-router-dom';

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
        </div>
    );
  }
}

export default Home;