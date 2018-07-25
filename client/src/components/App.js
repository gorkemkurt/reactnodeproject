import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
// import axios from 'axios';
import './styles/App.css';
import Landing from './Landing';

class App extends Component {
  state = {
    countryName: ''
  };

  componentDidMount() {
    this.props.fetchUser();
    // axios.get('https://freegeoip.net/json/').then(response => {
    //   this.setState({
    //     countryName: response.data.country_name
    //   });
    // }).catch(error => console.log(error));
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Landing} />

          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);


{/* <div className="centered">
          <Link to={{ pathname: '/index', state: { countryName: this.state.countryName } }}>
            <button > {this.state.countryName} </button>
          </Link>
        </div>
        <a href="/auth/google">Sign In With Google</a> */}