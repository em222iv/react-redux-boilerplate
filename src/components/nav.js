import { connect } from 'react-redux';
import React, { PropTypes, Component } from 'react';
import actions from '../actions';
import { Router, Route, Link } from 'react-router';

class Nav extends Component {
    render() {
        return (
            <nav className="nav">
                <Link to={'/home'}>HOME</Link> | <Link to={'/counter'}>COUNTER</Link>
            </nav>
        );
    }
}

export default Nav;
