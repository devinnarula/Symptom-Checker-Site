import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';
import Graph from '../images/graph.jpg'
import Aboutus from '../images/aboutus.png'
import Contact from '../images/contact.png'

class Cards extends Component{
    render(){
        return(
            <div className="Cards">
                <div>
                    <h1 className="Resources-Title">Other Resources</h1>
                </div>
                <Link className='Card' to='/Dashboard'>
                <div className="DashboardCard">
                    <div>
                        <h2 className="DashboardLink">COVID-19 Dashboard</h2>
                    </div>
                    <img alt="" src={Graph} className="Graph" />
                </div>
                </Link>
                <Link className='Card' to='/About'>
                    <div>
                        <h2 className="AboutCardLink"><Link className='App-link' to='/About'>About Us</Link></h2>
                    </div>
                    <img alt="" src={Aboutus} className="Aboutus" />
                </Link>
                <Link className='Card' to='/Contact'>
                    <div>
                        <h2 className="ContactCardLink"><Link className='App-link' to='/Contact'>Contact</Link></h2>
                    </div>
                    <img alt="" src={Contact} className="Contact" />
                </Link>
            </div>
        )
    }
}

export default Cards;