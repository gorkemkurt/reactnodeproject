import React, { Component } from 'react';
import axios from 'axios';
// import { fetchQuestionSet } from '../actions';
import './styles/Question.css';

class App extends Component {
  state = {
    questionSet: ''
  };

  componentDidMount() {
    if (this.props.location.state) {
      const language = this.props.location.state.language;
      const country = this.props.location.state.countryName;
    }
    axios.get('/api/questionSets').then(response => {
      this.setState({
        questionSet: response.data.questionSet
      });
    }).catch(error => console.log(error));
    // this.props.fetchQuestionSet();
  }

  render() {
    return (
      <div >
        <div className="left" >
          <span>
            {this.state.questionSet.question1}
          </span>
        </div>
        <div className="right">
          <span>
            {this.state.questionSet.question2}
          </span>
        </div>
      </div>
    );
  }
}

export default App;
