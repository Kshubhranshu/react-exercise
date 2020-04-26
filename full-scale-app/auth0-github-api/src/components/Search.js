import React, { Component } from 'react'

// getprofile

class Search extends Component {
    submit(event) {
        event.preventDefault();
        let value = this.refs.username.value;
        event.preventDefault();
        console.log("inside search")
        console.log(value)
        this.props.searchProfile(value);
        event.preventDefault();
        this.refs.username.value = '';
        event.preventDefault();

    }

    render() {
        return (
            <div className="search-box">
                <form onSubmit={this.submit.bind(this)}>
                    <label>
                        <input type="search" ref="username" className="form-control" placeholder="search user" />
                    </label>
                </form>
            </div>
        )
    }
}

export default Search;