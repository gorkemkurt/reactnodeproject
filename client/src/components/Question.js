import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
// import { fetchQuestionSet } from '../actions';
import './styles/Question.css';

class Question extends Component {
  state = {
    questionSet: '',
    language: ''
  };

  componentDidMount() {
    if (this.props.location.state) {
      const language = this.props.location.state.language;
      const country = this.props.location.state.countryName;
    }
    // axios.get('/api/questionSets').then(response => {
    //   this.setState({
    //     questionSet: response.data.questionSet
    //   });
    // }).catch(error => console.log(error));
    const language = navigator.language ? navigator.language : navigator.browserLanguage;
    this.setState({ language: language });
    // this.props.fetchQuestionSet();
  }

  answerQuestion(answer) {
    //send questionSetId and answer, show results by calculating clients answer
    console.log(answer);
  }

  render() {
    console.log(this.props);
    return (
      <div >
        <div className="left" onClick={() => { this.answerQuestion('asdasdasdasd') }}>
          <span>
            {/* {this.state.questionSet.question1} */}
          </span>
        </div>
        <div className="right" onClick={() => { this.answerQuestion('qweqwewqewqeqw') }}>
          <span>
            {/* {this.state.questionSet.question2} */}
          </span>
        </div>
      </div>
    );
  };
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Question);
