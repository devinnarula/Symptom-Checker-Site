import React, {Component} from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import Dillon from '../images/Dillon.jpg'
import Forrest from '../images/IMG_0008.JPG'

class About extends Component{
    render(){
        return(
            <div className="About">
                <div>
                    <h1>Meet the Developers</h1>
                </div>
                <div className="People">
                    <div className="Devin">
                        <h2>Devin Narula</h2>
                        <img className="DevinImg" src="https://devinnarula.com/static/Profile-dc702ab1cc214af40f56873c8f2dd5f8.jpg" alt="new"/>
                    </div>
                    <div className="Dillon">
                        <h2>Dillon Ranwala</h2>
                        <img alt="" src={Dillon} className="DillonImg" />
                    </div>
                    <div className="Shreya">
                        <h2>Shreya Thammana</h2>
                        <img className="ShreyaImg" src="https://yt3.ggpht.com/ytc/AAUvwni9a0jJeGKGzBRlw3zps1k_N_y8tLRosMezpePyqA=s900-c-k-c0x00ffffff-no-rj" alt="new2"/>
                    </div>
                    <div className="Forrest">
                        <h2>Forrest Zach</h2>
                        <img alt="" src={Forrest} className="ForrestImg" />
                    </div>
                </div>
                <div>
                    <h1>SymptoBot's Purpose</h1>  
                    <h4>We designed this user-friendly interface to help when you need a quick diagnosis.</h4>
                    <h4>Note: your diagnosis is not confirmed and you should always consult a doctor about any symptoms you may be experiencing.</h4>
                </div>
                <div className = "Button2">
                        <h1><Link className='App-link' to='/'>Go Home</Link></h1>
                </div>
            </div>
        )
    }
}

export default About;