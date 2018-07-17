import React, { Component } from 'react';
// import axios from 'axios';
import './styles/App.css';
import { Link } from 'react-router-dom';

class App extends Component {
  state = {
    countryName: ''
  };

  componentDidMount() {
    // axios.get('https://freegeoip.net/json/').then(response => {
    //   this.setState({
    //     countryName: response.data.country_name
    //   });
    // }).catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <div className="centered">
          <Link to={{ pathname: '/index', state: { countryName: this.state.countryName } }}>
            <button > {this.state.countryName} </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default App;
