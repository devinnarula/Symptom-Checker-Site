import React, {Component} from 'react';
import './Info.css';
import Diagnosis from './Diagnosis'
import Male from '../images/male.PNG'
import Female from '../images/female.PNG'
import {v4 as uuid} from "uuid";

class Chatbox extends Component {
    static defaultProps = {
        symptoms: ["Headache","Anxiety","Back Pain","Chest Pain","Depressed mood","Diarrhea","Dizziness","Hair loss","Rash","Red eye","Sneezing","Snoring","Stiff neck","Burning skin","Weight gain","Toothache","Cough","Fever","Nosebleeds","Chills","Excessive sweating","Nausea","Vomiting","Fatigue","Hiccups"]
    }
    constructor(props){
        super(props)
        this.state = {
            Gender: 'male',
            Age: 18,
            symptomStatus: ["absent","absent","absent","absent","absent","absent","absent","absent","absent","absent","absent","absent","absent","absent","absent","absent","absent","absent","absent","absent","absent","absent","absent","absent","absent"],
            color: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
            submitted: false
        };
        this.selectMale = this.selectMale.bind(this);
        this.selectFemale = this.selectFemale.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getColor = this.getColor.bind(this);
    }

    selectMale() {
        this.setState({Gender: 'male'});
    }

    selectFemale() {
        this.setState({Gender: 'female'});
    }

    handleChange(event){
        this.setState({Age: event.target.value})
    }

    changeStatus(symptom){
        // document.getElementById(symptom).style.backgroundColor = "gray";
        console.log(symptom)
        let index = this.props.symptoms.indexOf(symptom);
        let items = [...this.state.symptomStatus];
        let item = {...items[index]};
        item = 'present';
        items[index] = item;
        this.setState({symptomStatus: items});

        let items2 = [...this.state.color];
        let item2 = {...items2[index]};
        item2 = true;
        items2[index] = item2;
        this.setState({color: items2});
        console.log(this.state.color)
    }

    getColor(symptom){
        console.log('hi')
        // document.getElementById(symptom).style.backgroundColor = "gray";
        console.log(symptom)
        let index = this.props.symptoms.indexOf(symptom);
         let items = [...this.state.symptomStatus];
        let item = {...items[index]};
        var ret = ``;
        if(item === 'present')
            ret= 'rgb(92, 156, 252)';
        else
            ret= 'rgb(137, 183, 252)';
            console.log(ret)
        return ret;
        // items[index] = item;
        // this.setState({symptomStatus: items});
    }

    handleSubmit(){
        this.setState({submitted: true});
        // var options = {
        //     url: 'https://api.infermedica.com/v2/diagnosis',
        //     method: 'POST',
        //     headers: {
        //         'App-Id': 'aa2fb846',
        //         'App-Key': '150bc1e17a9a86a6c21f7e0f4cfa9d41',
        //         'Content-Type': 'application/json'
        //     },
        //     data: JSON.stringify({
        //         sex: "male",
        //         age: {
        //           "value": 30
        //         },
        //         evidence: [
        //             {
        //               "id": "s_1193",
        //               "choice_id": "present",
        //               "source": "initial"
        //             },
        //             {
        //               "id": "s_488",
        //               "choice_id": "present"
        //             },
        //             {
        //               "id": "s_418",
        //               "choice_id": "present"
        //             }
        //         ]
        //     })
        //   };

        //   await axios.request(options).then(function (response) {
        //       console.log(response.data);
        //   }).catch(function (error) {
        //       console.error(error);
        //   });
    }

    render() {
        return (
            <div className='Information'>
                {this.state.submitted && <Diagnosis sex={this.state.Gender} age={this.state.Age} symptomStatus={this.state.symptomStatus} />}
                <div className='Information-General'>
                    <h1 className='Information-Title'>Please Select Your Sex: {this.state.Gender}</h1>
                    <div className='Information-Genders'>
                        <div className='Information-Gender' style={{backgroundColor: this.state.Gender==='male' ? 'rgb(180, 180, 180)' : 'rgb(223, 223, 223)'}} onClick={this.selectMale}>
                            <img alt="" src={Male} className='Information-Male' ></img>
                        </div>
                        <div className='Information-Gender' style={{backgroundColor: this.state.Gender==='female' ? 'rgb(180, 180, 180)' : 'rgb(223, 223, 223)'}} onClick={this.selectFemale}>
                            <img alt="" src={Female} className='Information-Female' ></img>
                        </div>
                    </div>
                    <h1 className='Information-Title'>Please Select Your Age: </h1>
                    <div className='Information-Age'>
                        <input type="range" className="Information-AgeSlider" id="age" min="0" max="130" value={this.state.Age} onChange={this.handleChange} />
                        <h2 className='Information-AgeText'>{this.state.Age}</h2>
                    </div>
                </div>
                <div className='Information-Symptoms'>
                    {/* <form className="Information-Form">
                        <input className="Information-Typebox" type="text" value={this.state.Typed}  />
                        <input className="Information-Add" type="submit" value="Add" onClick={this.handleSubmit}/>
                    </form> */}
                    <h1 className='Information-Title'>Please Select Your Symptoms:</h1>
                    <div className='Information-SymptomList'>
                            {this.props.symptoms.map((m) => (
                                <div key={uuid()} id={m} className="Information-Symptom" style={{backgroundColor: this.state.color[this.props.symptoms.indexOf(m)] ? 'rgb(92, 156, 252)' : 'rgb(137, 183, 252)'}} onClick={() => this.changeStatus(m)}>{m}</div>      
                            ))}
                    </div>
                    <input className="Information-Submit" type="submit" value="Submit" onClick={this.handleSubmit}/>

                </div>
            </div>
        );
    }
}

export default Chatbox;