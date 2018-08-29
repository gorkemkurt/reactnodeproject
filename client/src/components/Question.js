import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from '../actions';
import './styles/Question.css';
// import { throws } from 'assert';

// const User = mongoose.model('questionSet');

class Question extends Component {
  state = {
    questionSet: '',
    language: ''
  };

  componentDidMount() {
    axios.get('/api/questionSets').then(response => {
      this.setState({
        questionSet: response.data.questionSet
      });
    }).catch(error => console.log(error));

    // if (this.props.location.state) {
    //   const language = this.props.location.state.language;
    //   const country = this.props.location.state.countryName;
    // }

    // const language = navigator.language ? navigator.language : navigator.browserLanguage;
    // this.setState({ language: language });
    // this.props.fetchQuestionSet();
    // console.log(this.state.questionSet);
  }

  answerQuestion(answer) {
    //send questionSetId and answer, show results by calculating clients answer
    // console.log(answer);
    let questionSet = this.state.questionSet;
    if (answer === '1') {
      if (questionSet.result1) {
        console.log('123232323232');
      } else {
        // questionSet.result1 = new 
      }
      // questionSet.result1.totalVote++;
    } else if (answer === '2') {
      questionSet.result2.totalVote++;
    }
    // questionSet.save();
  }

  render() {
    // console.log(this.props.auth);
    return (
      <div >
        <div className="left" onClick={() => { this.answerQuestion('1') }}>
          <span>
            {this.state.questionSet.question1}
          </span>
        </div>
        <div className="right" onClick={() => { this.answerQuestion('2') }}>
          <span>
            {this.state.questionSet.question2}
          </span>
        </div>
      </div>
    );
  };
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps, actions)(Question);
