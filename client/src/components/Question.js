import React, { Component } from 'react';
import './styles/Question.css';

class App extends Component {
  componentDidMount() {
    const language = this.props.location.state.language;
    const country = this.props.location.state.countryName;
  }

  render() {
    const question1 = { text: "Question 1 dummy" };
    const question2 = { text: "Question 2 dummy" };

    return (
      <div >
        <div className="left" >
          <span>
            {question1.text}
          </span>
        </div>
        <div className="right">
          <span>
            {question2.text}
          </span>
        </div>
      </div>
    );
  }
}

export default App;
