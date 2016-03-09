import { connect } from 'react-redux';
import { Navigation } from 'react-router';
import React, { PropTypes } from 'react';
import Nav from './nav';

class Wrap extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Nav/>
                <div className="container">
                   {this.props.children}
                </div>
            </div>
        );
    }
}

export default Wrap;
