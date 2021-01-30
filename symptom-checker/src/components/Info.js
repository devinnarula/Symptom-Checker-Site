import React, {Component} from 'react';
import { MDBRangeInput, MDBRow, MDBContainer } from "mdbreact";
import axios from 'axios'
import './Info.css';
import Male from '../images/male.PNG'
import Female from '../images/female.PNG'

class Chatbox extends Component {
    constructor(props){
        super(props)
        this.state = {
            Gender: 'Male',
            Age: '18'
        };
        this.selectMale = this.selectMale.bind(this);
        this.selectFemale = this.selectFemale.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    selectMale(event) {
        this.setState({Gender: 'Male'});
    }

    selectFemale() {
        this.setState({Gender: 'Female'});
    }

    handleChange(event){
        this.setState({Age: event.target.value})
    }

    render() {
        return (
            <div className='Information'>
                <h1 className='Information-Title'>Please Select Your Sex:</h1>
                <div className='Information-Genders'>
                    <div className='Information-Gender'>
                        <img src={Male} className='Information-Male' ></img>
                    </div>
                    <div className='Information-Gender'>
                        <img src={Female} className='Information-Female' ></img>
                    </div>
                </div>
                <h1 className='Information-Title'>Please Select Your Age: </h1>
                <div className='Information-Age'>
                    <input type="range" className="Information-AgeSlider" id="age" min="0" max="130" value={this.state.Age} onChange={this.handleChange} />
                    <h2 className='Information-AgeText'>{this.state.Age}</h2>
                </div>
            </div>
        );
    }
}

export default Chatbox;