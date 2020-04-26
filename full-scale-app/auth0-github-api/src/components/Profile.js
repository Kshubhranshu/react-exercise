import React, { Component } from 'react';

class Profile extends Component {

    render() {
        let userdata = this.props.userData;
        console.log("inside profile")
        console.log(userdata);
        let followers = `${userdata.homeUrl}/followers`;
        let following = `${userdata.homeUrl}/following`;
        let repos = `${userdata.homeUrl}/repository`;


        if(userdata.notFound === 'Not Found') {
            return (
                <div className="not-found">
                    <h2>Oops!</h2>
                    <p>User not found</p>
                </div>
            );
        }
        else {
            return (
                <section className="github-profile">
                    <div className="github-profile-info">
                        <a href={userdata.homeUrl} target="_blank" title={userdata.name || userdata.username}><img src={userdata.avatar} /></a>
                        <h2><a href={userdata.homeUrl} target="_blank" title={userdata.name || userdata.username}>{userdata.name}</a></h2>
                        <h3>{userdata.location}</h3>
                    </div>
                    <div className="github-profile-state">
                        <ul>
                            <li>
                                <a href={followers} target="_blank" title="No. Of Followers"><i>{userdata.followers}</i>Followers</a>
                            </li>

                            <li>
                                <a href={repos} target="_blank" title="No. Of Repository"><i>{userdata.repos}</i>Repository</a>
                            </li>

                            <li>
                                <a href={following} target="_blank" title="Number Of Following"><i>{userdata.following}</i>Following</a>
                            </li>
                        </ul>
                    </div>
                </section>
            );
        }
    }
}

export default Profile;
