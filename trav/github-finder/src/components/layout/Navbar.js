import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Navbar extends Component {
    static defaultProps = {
        title: 'Github Finder',
        icon: 'fa fa-github'
    }

    static propTypes = {
        title: PropTypes.string.isRequired
    }

    render() {
        return (
            <nav className="bg-primary navbar">
                <h1><i className={this.props.icon}></i>{this.props.title}</h1>
            </nav>
        )
    }
}

export default Navbar;