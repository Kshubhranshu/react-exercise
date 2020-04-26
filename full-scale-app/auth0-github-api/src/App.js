import React, { Component } from 'react';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Github from './Github';
import Header from './components/Header';
import Auth0Lock from 'auth0-lock';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      idToken: '',
      profile: {}
    }
    this.logout = this.logout.bind(this);   
  }
  

  static defaultProps = {
    clientId: 'ke7vWk4Hzzd1WjpNa127KBne6E8anKiy',
    domain: 'dev-a0d3c1ba.auth0.com'
  }

  componentDidMount() {
    this.lock = new Auth0Lock(this.props.clientId, this.props.domain, {
      responseType: 'token token_id'
    });

    this.lock.on('authenticated', (authResult) => {
      // console.log(authResult);

      this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
        if (error) {
          // console.log(error);
          return;
        }
        // console.log(profile);
        this.setProfile(authResult.idToken, profile);

      });
    });
    this.getProfile();
  }

  setProfile(idToken, profile) {
    // console.log("inside set profile");
    localStorage.setItem('idToken', idToken);
    localStorage.setItem('profile', JSON.stringify(profile));

    this.setState({
      idToken: localStorage.getItem('idToken'),
      profile: JSON.parse(localStorage.getItem('profile'))
    });
  }

  getProfile() {
    if(localStorage.getItem('idToken' !== null)) {
      this.setState({
        idToken: localStorage.getItem('idToken'),
        profile: JSON.parse(localStorage.getItem('profile'))
      }, () => {
        // console.log("inside getprofile this.state")
        // console.log(this.state);
      });
    }
  }

  showLock() {
    this.lock.show();
  }

  logout() {
    this.setState({
      idToken: '',
      profile: ''
    }, () => {
      localStorage.removeItem('idToken');
      localStorage.removeItem('profile');
    });
  }

  render() {
    let githubTest;

    if(this.state.idToken) {
      githubTest = <Github />
    }
    else {
      githubTest = `Click on Login to view Github Viewer`;
    }

    return (
      <div className="App">
        <Header 
        onLogin={this.showLock.bind(this)}
        onLogout={this.logout}
        idToken={this.state.idToken}
        profile={this.state.profile}
        lock={this.lock}

        />
        <br />
        <br />
        {githubTest}
      </div>
    );
  }
}

export default App;
