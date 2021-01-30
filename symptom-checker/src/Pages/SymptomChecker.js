import React, {Component} from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './SymptomChecker.css';
import '../components/Chatbox'
import Chatbox from '../components/Chatbox';

class SymptomChecker extends Component {
  render() {
    return (
      <div className="SymptomChecker">
          <h1 className="SymptomChecker-Title">Symptom Checker</h1> 
          <Chatbox className="SymptomChecker-Chatbox" />
          <Link className='BackHome' to='/'>Back to Home</Link>
      </div>
    );
  }
}

export default SymptomChecker;