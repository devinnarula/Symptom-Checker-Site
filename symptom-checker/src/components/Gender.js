import React, {Component} from 'react';
import './Gender.css';

class Gender extends Component {
    constructor(props){
        super(props)
        this.state = {
        };
    }
    render() {
        return (
            <div className='Gender'>
                <h1 className='Gender-Title'>What is your sex?</h1>
                <div className='Gender-Content'>
                </div>
            </div>
        );
    }
}

export default Gender;