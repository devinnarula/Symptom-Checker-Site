import React, {Component} from 'react';
import {Link } from 'react-router-dom';
import './SymptomChecker.css';
import '../components/Chatbox'
import Chatbox from '../components/Chatbox';

class SymptomChecker extends Component {
  render() {
    return (
      <div className="SymptomChecker">
          {/* <div> */}
            <h1 className="SymptomChecker-Title">Symptom Checker</h1> 
          {/* </div> */}
          <Chatbox />
          <div className = "BackHome">
                <h1><Link className='App-link' to='/'>Go Home</Link></h1>
            </div>
      </div>
    );
  }
}

export default SymptomChecker;