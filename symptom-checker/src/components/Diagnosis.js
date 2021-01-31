import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import './Diagnosis.css';
import {v4 as uuid} from "uuid";


class Diagnosis extends Component {
    constructor(props){
        super(props)
        this.state = {
            conditions: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({Typed: event.target.value});
    }
    handleSubmit() {
        this.setState({Typed: ''});
    }

    async componentDidMount() {
        var self = this;
        var patientData = {
            sex: self.props.sex,
            age: {
              "value": parseInt(self.props.age, 10)
            },
            evidence: [
                {
                  "id": "s_21",
                  "choice_id": self.props.symptomStatus[0],
                  "source": "initial"
                },
                {
                  "id": "s_120",
                  "choice_id": self.props.symptomStatus[1]
                },
                {
                  "id": "s_1190",
                  "choice_id": self.props.symptomStatus[2]
                },
                {
                    "id": "s_50",
                    "choice_id": self.props.symptomStatus[3]
                  },
                  {
                    "id": "s_169",
                    "choice_id": self.props.symptomStatus[4]
                  },
                  {
                    "id": "s_8",
                    "choice_id": self.props.symptomStatus[5]
                  },
                  {
                    "id": "s_370",
                    "choice_id": self.props.symptomStatus[6]
                  },
                  {
                    "id": "s_121",
                    "choice_id": self.props.symptomStatus[7]
                  },
                  {
                    "id": "s_417",
                    "choice_id": self.props.symptomStatus[8]
                  },
                  {
                    "id": "s_492",
                    "choice_id": self.props.symptomStatus[9]
                  },
                  {
                    "id": "s_715",
                    "choice_id": self.props.symptomStatus[10]
                  },
                  {
                    "id": "s_67",
                    "choice_id": self.props.symptomStatus[11]
                  },
                  {
                    "id": "s_418",
                    "choice_id": self.props.symptomStatus[12]
                  },
                  {
                    "id": "s_1165",
                    "choice_id": self.props.symptomStatus[13]
                  },
                  {
                    "id": "s_226",
                    "choice_id": self.props.symptomStatus[14]
                  },
                  {
                    "id": "s_551",
                    "choice_id": self.props.symptomStatus[15]
                  },
                  {
                    "id": "s_102",
                    "choice_id": self.props.symptomStatus[16]
                  },
                  {
                    "id": "s_98",
                    "choice_id": self.props.symptomStatus[17]
                  },
                  {
                    "id": "s_1429",
                    "choice_id": self.props.symptomStatus[18]
                  },
                  {
                    "id": "s_81",
                    "choice_id": self.props.symptomStatus[19]
                  },
                  {
                    "id": "s_216",
                    "choice_id": self.props.symptomStatus[20]
                  },
                  {
                    "id": "s_156",
                    "choice_id": self.props.symptomStatus[21]
                  },
                  {
                    "id": "s_305",
                    "choice_id": self.props.symptomStatus[22]
                  },
                  {
                    "id": "s_2100",
                    "choice_id": self.props.symptomStatus[23]
                  },
                  {
                    "id": "s_1295",
                    "choice_id": self.props.symptomStatus[24]
                  },
            ]
        }
        var options = {
            url: 'https://api.infermedica.com/v2/diagnosis',
            method: 'POST',
            headers: {
                'App-Id': 'aa2fb846',
                'App-Key': '150bc1e17a9a86a6c21f7e0f4cfa9d41',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(patientData)
          };

          await axios.request(options).then(function (response) {
              console.log(response.data.conditions);
              self.setState({conditions: response.data.conditions});
          }).catch(function (error) {
              console.error(error);
          });
    }
    render() {
        return (
            <div className='Diagnosis'>
                <h1>Potential Diagnosis:</h1>
                {this.state.conditions.map((m) => (
                    <h1 key={uuid()}>{m.name}</h1>      
                 ))}
            <Link className='toHome' to='/'>Go to Home</Link>
            </div>
        );
    }
}

export default Diagnosis;