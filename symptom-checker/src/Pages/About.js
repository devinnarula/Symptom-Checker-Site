import React, {Component} from 'react';
import './About.css';

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
                        <h4>Description</h4>
                    </div>
                    <div className="Dillon">
                        <h2>Dillon Ranwala</h2>
                        <h4>Description</h4>
                    </div>
                    <div className="Shreya">
                        <h2>Shreya Thammana</h2>
                        <h4>Description</h4>
                    </div>
                    <div className="Forrest">
                        <h2>Forrest Zach</h2>
                        <h4>Description</h4>
                    </div>
                </div>
                <div>
                    <h1>SymptoBot's Purpose</h1>  
                    <h4>We designed this user-friendly interface to blah blah blah</h4>
                </div>
            </div>
        )
    }
}

export default About;