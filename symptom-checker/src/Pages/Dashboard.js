import React, {Component} from 'react';
import './Dashboard.css';
import axios from 'axios'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {data: []}
    }

    async componentDidMount() {
        var options = {
            method: 'GET',
            url: 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total',
            params: {country: 'World'},
            headers: {
              'x-rapidapi-key': '89a501b0a9msh27282160a5b3e9ap1518d8jsncfc1011e0ec4',
              'x-rapidapi-host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
            }
          };
          var self = this
          await axios.request(options).then(function (response) {
              self.setState({data: response.data.data} )
            }).catch(function (error) {
              console.error(error);
          });

          console.log(this.state.data)
          console.log(this.state.data.recovered)
    }
    
  render() {
    return (
      <div className="Dashboard">
        <h1 className="Dashboard-title">COVID-19 Dashboard</h1>
        <div className="Dashboard-items">
          <h1 className="Confirmed">Confirmed Cases: {this.state.data.confirmed}</h1>
          <h1 className="Recovered">Recovered: {this.state.data.recovered}</h1>
          <h1 className="Deaths">Deaths: {this.state.data.deaths}</h1>
          <h1 className="lastChecked">Last Checked: {this.state.data.lastChecked}</h1>
          <h1 className="lastReported">Last Reported: {this.state.data.lastReported}</h1>
        </div>
      </div>
    );
  }
}

export default Dashboard;