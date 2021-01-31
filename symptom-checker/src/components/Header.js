import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import HealthImage from '../images/healthimage.jpg'
import Symptobot from '../images/symptobot.png'

class Header extends Component{
    render(){
        return(
            <div className="Grid">
                <div className="Left"> 
                    <div className="Welcome">
                        <h1>Welcome to SymptoBot</h1>
                    </div>
                    <div className='Symptobot'>
                        <img alt="" className="SymptobotImg" src={Symptobot}></img>
                    </div>
                    <div className="Header">
                        <h2>There's no need to fear when symptoms appear. </h2>
                    </div>
                    <div className="Description">
                        <h3>With SymptoBot, you can answer just a few questions to help you discover the cause of your pesky symptoms.</h3>
                    </div>
                    <div className = "Button">
                        <h1><Link className='App-link' to='/SymptomChecker'>Get Started!</Link></h1>
                    </div>
                    <img alt="" src={HealthImage} className="HealthImage" />
                </div>
            </div>
        )
    }
}

export default Header;