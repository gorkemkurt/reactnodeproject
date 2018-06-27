import React, { Component } from 'react';
import axios from 'axios';
import './styles/App.css';
import { Link } from 'react-router-dom';

class App extends Component {
  state = {
    countryName: '',
    language: ''
  };

  componentDidMount() {
    axios.get('https://freegeoip.net/json/').then(response => {
      this.setState({
        countryName: response.data.country_name
      });
    }).catch(error => console.log(error));

    const language = navigator.language ? navigator.language : navigator.browserLanguage;
    this.setState({ language: language });

  }

  render() {
    return (
      <div>
        <div className="centered">
          <Link to={{ pathname: '/index', state: { language: this.state.language, countryName: this.state.countryName } }}>
            <button > {this.state.countryName} </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default App;
