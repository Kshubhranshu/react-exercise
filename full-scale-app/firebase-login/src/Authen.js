import React, { Component } from 'react'

var firebase = require('firebase');

var firebaseConfig = {
    apiKey: "AIzaSyCRsJh9YppCxmENqJf6MZtqWgEZDPRqa1U",
    authDomain: "fir-login-95ba1.firebaseapp.com",
    databaseURL: "https://fir-login-95ba1.firebaseio.com",
    projectId: "fir-login-95ba1",
    storageBucket: "fir-login-95ba1.appspot.com",
    messagingSenderId: "397841469304",
    appId: "1:397841469304:web:473da900b4bf66073d428d"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class Authen extends Component {
    login(event) {
        var email = this.refs.email.value;
        var password = this.refs.password.value;

        console.log(email, password);

        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email, password);

        promise.then(user => {
            var lout = document.getElementById('logout');
            lout.classList.remove('hide');
            this.setState({err: 'Welcome ' + email});
        })

        promise.catch(e => {
            var err = e.message;
            console.log(err);
            this.setState({ err });
        })
    }

    signup(event) {
        var email = this.refs.email.value;
        var password = this.refs.password.value;
        console.log(email, password);

        const auth = firebase.auth();
        
        const promise = auth.createUserWithEmailAndPassword(email, password);

        promise
        .then(user => {
            var err = 'Account created successfully ' + email;
            firebase.database().ref('/users').set({
                email: email
            });
            console.log(user);
            this.setState({err});
        });

        promise
        .catch(e => {
            var err = e.message;
            console.log(err);
            this.setState({err});
        });
    }

    logout(event) {
        firebase.auth().signOut();
        var lout = document.getElementById('logout');
        this.setState({err: 'Thank you'});
        lout.classList.add('hide');
    }

    constructor(props) {
        super(props)
    
        this.state = {
            err: ''     
        }
        
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.logout = this.logout.bind(this);
    }
    
    render() {
        return (
            <div>
                <input id="email" type="email" placeholder="Enter your email" ref="email" /> <br/>
                <input id="pass" type="password" placeholder="Enter your password" ref="password" /> <br/>
                <p className="error-message">{this.state.err}</p>

                <button onClick={this.login}>Log In</button>
                <button onClick={this.signup}>Sign Up</button>
                <button onClick={this.logout} className="hide" id="logout" style={{backgroundColor: "red"}}>Log Out</button>
            </div>
        )
    }
}

export default Authen;
