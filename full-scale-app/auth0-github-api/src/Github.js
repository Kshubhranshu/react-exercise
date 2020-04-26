import React, { Component } from 'react';
import Profile from './components/Profile';
import Search from './components/Search';

const API = 'https://api.github.com/users'

class Github extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: 'kshubhranshu',
             name: '',
             avatar: '',
             repos: '',
             followers: '',
             following: '',
             homeUrl: '',
             notFound: ''
        }
    }

    getProfile(username) {
        let finalURL = `${API}/${username}`;

        fetch(finalURL)
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                username: data.login,
                name: data.name,
                avatar: data.avatar_url,
                repos: data.public_repos,
                followers: data.followers,
                following: data.following,
                homeUrl: data.html_url,
                notFound: data.message
            })
        })
        .catch((err) => {
            console.log('There was a problem while fetching data');
        })
    }
    
    componentDidMount() {
        this.getProfile(this.state.username);
        console.log("inside github")
        console.log(this.state)
    }

    render() {

        return (
            <div>
                <section id="card">
                    <Search searchProfile={this.getProfile.bind(this)}/>
                    <Profile userData={this.state} />
                </section>
            </div>
        );
    }
}

export default Github;