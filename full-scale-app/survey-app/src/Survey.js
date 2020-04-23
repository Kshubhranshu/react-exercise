import React, { Component } from 'react';
var firebase = require('firebase');
var uuid = require('uuid');


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA4HBmxJNzxOothHbt75Pnj8rxbTMHoq2E",
    authDomain: "u-survey-80916.firebaseapp.com",
    databaseURL: "https://u-survey-80916.firebaseio.com",
    projectId: "u-survey-80916",
    storageBucket: "u-survey-80916.appspot.com",
    messagingSenderId: "300177332954",
    appId: "1:300177332954:web:87cacbfd10b17a8181e3e3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class Survey extends Component {
    userNameSubmit(event) {
        const userName = this.refs.name.value;
        this.setState({ userName: userName }, function () { console.log(this.state) });
    }

    answerSelected(event) {
        const answers = this.state.answers;

        if (event.target.name == 'answer1') {
            answers.answer1 = event.target.value;
        }
        else if (event.target.name == 'answer2') {
            answers.answer2 = event.target.value;
        }
        else if (event.target.name == 'answer3') {
            answers.answer1 = event.target.value;
        }

        else if (event.target.name == 'answer4') {
            answers.answer4 = event.target.value;
        }

        else if (event.target.name == 'answer5') {
            answers.answer5 = event.target.value;
        }

        this.setState({ answers: answers }, function () { console.log(this.state) });
    }

    questionSubmit(event) {
        firebase.database().ref('uSurvey/' + this.state.uid).set({
            studentName: this.state.studentName,
            answers: this.state.answers
        });
        this.setState({ isSubmitted: true })
    }
    
    constructor(props) {
        super(props)

        this.state = {
            uid: uuid.v1(),
            userName: '',
            answers: {
                answer1: '',
                answer2: '',
                answer3: '',
                answer4: '',
                answer5: ''
            },
            isSubmitted: false
        }

        this.questionSubmit = this.questionSubmit.bind(this);
        this.userNameSubmit = this.userNameSubmit.bind(this);
        this.answerSelected = this.answerSelected.bind(this);
    }

    render() {
        var userName;
        var questions;

        if (this.state.userName === '' && this.state.isSubmitted === false) {
            userName = <div className="user-input">
                <h1>Hey User, Please let us know your name: </h1>
                <form onSubmit={this.userNameSubmit}>
                    <input className="user-name-input" type="text" placeholder="Enter your name" ref="name" required />
                </form>
            </div>;
            questions = ''
        }

        else if (this.state.userName !== '' && this.state.isSubmitted === false) {
            userName =
                <h1>Welcome I hope you are doing great, <b style={{ textTransform: "uppercase" }}>{this.state.userName}</b></h1>;
            questions =
                <div>
                    <h2>Here you go...</h2>
                    <form onSubmit={this.questionSubmit}>
                        <div className="card-tile">

                            <label>Do you have a Discord account ?</label><br />
                            <input type="radio" name="answer1" value="yes" onChange={this.answerSelected} />Yes
                            <input type="radio" name="answer1" value="no" onChange={this.answerSelected} />No
                        </div>

                        <div className="card-tile">
                            <label>On what languages you have worked on ?</label><br />
                            <input type="radio" name="answer2" value="c" onChange={this.answerSelected} />C
                            <input type="radio" name="answer2" value="c++" onChange={this.answerSelected} />C++
                            <input type="radio" name="answer2" value="pyhton" onChange={this.answerSelected} />Python
                        </div>

                        <div className="card-tile">
                            <label>Have you worked on any database ?</label><br />
                            <input type="radio" name="answer3" value="yes" onChange={this.answerSelected} />Yes
                            <input type="radio" name="answer3" value="no" onChange={this.answerSelected} />No
                        </div>

                        <div className="card-tile">
                            <label>Have you created any GUI app ?</label><br />
                            <input type="radio" name="answer4" value="yes" onChange={this.answerSelected} />Yes
                            <input type="radio" name="answer4" value="no" onChange={this.answerSelected} />No
                        </div>

                        <div className="card-tile">
                            <label>Are your instread in starting a server on Discord to help other developers and learning indivisuals ?</label><br />
                            <input type="radio" name="answer5" value="yes" onChange={this.answerSelected} />Yes
                            <input type="radio" name="answer5" value="no" onChange={this.answerSelected} />No
                        </div>

                        <input className="feedback-button" type="submit" value="submit" /> <br /><br />

                    </form>
                </div>
        }

        else if (this.state.isSubmitted === true && this.state.userName !== '') {
            userName = <h1> Thank for your feedback <span style='font-size:100px;'>&#128591;</span>
            Have a great day ahead <span style='font-size:100px;'>&#127849; </span>
            </h1>
        }

        return (
            <div>
                {userName}
                <br />
                {questions}
            </div>
        )
    }
}

export default Survey;
