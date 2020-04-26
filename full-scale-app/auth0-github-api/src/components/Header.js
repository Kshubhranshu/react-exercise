import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';


class Header extends Component {
    onLogin() {
        this.props.onLogin();
    }

    onLogout() {
        this.props.onLogout();
    }

    constructor(props) {
        super(props)
    
        this.state = {
             
        }

        this.onLogin = this.onLogin.bind(this);
        this.onLogout = this.onLogout.bind(this);

    }
    
    render() {
        let page;
        
        if(this.props.idToken) {
            page = <NavItem className="nav-item" href="#" onClick={this.onLogout} >Logout</NavItem>
        }
        else {
            page = <NavItem className="nav-item" href="#" onClick={this.onLogin} >Login</NavItem>
        }

        return (
            <Navbar className="navbar navbar-light">
                <Navbar.Header>
                    <Navbar.Brand>
                        Github Searcher
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    {page}
                </Nav>
            </Navbar>
        );
    }
}

export default Header;