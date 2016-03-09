import { connect } from 'react-redux';
import React, { PropTypes, Component } from 'react';
import actions from '../actions';
import { Router, Route, Link } from 'react-router';

class Nav extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="container">
                        <div className="nav-wrapper">
                          <Link to={'/home'}>HOME</Link>
                          <Link to={'/about'}>MEME</Link>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;
