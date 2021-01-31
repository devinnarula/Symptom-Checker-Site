import React, {Component} from 'react';
import './Chatbox.css';
import Info from './Info'

class Chatbox extends Component {
    constructor(props){
        super(props)
        this.state = {
            Message: 'Hello, welcome to SymptoBot.',
            Typed: ''
        };
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleChange(event) {
    //     this.setState({Typed: event.target.value});
    // }
    // handleSubmit() {
    //     this.setState({Typed: ''});
    // }

    // async componentDidMount() {
    //     var options = {
    //         url: 'https://api.infermedica.com/v2/diagnosis',
    //         method: 'POST',
    //         headers: {
    //             'App-Id': 'aa2fb846',
    //             'App-Key': '150bc1e17a9a86a6c21f7e0f4cfa9d41',
    //             'Content-Type': 'application/json'
    //         },
    //         data: JSON.stringify({
    //             sex: "male",
    //             age: {
    //               "value": 30
    //             },
    //             evidence: [
    //                 {
    //                   "id": "s_1193",
    //                   "choice_id": "present",
    //                   "source": "initial"
    //                 },
    //                 {
    //                   "id": "s_488",
    //                   "choice_id": "present"
    //                 },
    //                 {
    //                   "id": "s_418",
    //                   "choice_id": "present"
    //                 }
    //             ]
    //         })
    //       };

    //       await axios.request(options).then(function (response) {
    //           console.log(response.data);
    //       }).catch(function (error) {
    //           console.error(error);
    //       });
    // }
    render() {
        return (
            <div className='Chatbox'>
                <h1 className='Chatbox-Title'>SymptoBot</h1>

                <Info />

                <div className='Chatbox-Content'>
                <div className='Chatbox-Message'>
                    {/* <h1 className='Chatbox-MessageText'>{this.state.Message}</h1> */}
                </div>
                </div>
            </div>
        );
    }
}

export default Chatbox;