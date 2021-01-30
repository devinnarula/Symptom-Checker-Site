import React, {Component} from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './Header.css';
import HealthImage from '../images/healthimage.jpg'
import Portrait from '../images/portrait.jpg'

class Header extends Component{
    render(){
        return(
            <div className="Grid">
                <div className="Left">
                    <div className="Company">
                        <h3>Welcome to SymptoBot</h3>
                    </div>
                    <div className="Header">
                        <h1>There's no need to fear when symptoms appear. </h1>
                    </div>
                    <div className="Description">
                        <h4>Now, with SymptoBot, you can answer just a few questions to help you discover the cause of your pesky symptoms.</h4>
                    </div>
                    <div className = "Button">
                        <h1><Link className='App-link' to='/SymptomChecker'>Get Started!</Link></h1>
                    </div>
                    <img src={HealthImage} className="HealthImage" />
                </div>
                <div className='Portrait'>
                        <img className="PortraitImg" src={Portrait}></img>
                </div>
            </div>
        )
    }
}

export default Header;