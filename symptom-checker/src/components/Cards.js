import React, {Component} from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './Cards.css';
import Graph from '../images/graph.jpg'
import Symptoms from '../images/symptoms.jpg'

class Cards extends Component{
    render(){
        return(
            <div className="Cards">
                <div>
                    <h1 className="Resources-Title">Other Resources</h1>
                </div>
                <Link className='Card' to='/Dashboard'>
                {/* <div className="DashboardCard"> */}
                    <div>
                        <h2 className="DashboardLink">COVID-19 Dashboard</h2>
                    </div>
                    <img src={Graph} className="Graph" />
                    <div>
                        <h3>Real time COVID-19 data</h3>
                    </div>
                {/* </div> */}
                </Link>
                <Link className='Card' to='/About'>
                    <div>
                        <h2 className="AboutCardLink"><Link className='App-link' to='/About'>About Us</Link></h2>
                    </div>
                    <img src={Symptoms} className="Symptoms" />
                    <div>
                        <h3>What is a symptom checker?</h3>
                    </div>
                </Link>
            </div>
        )
    }
}

export default Cards;