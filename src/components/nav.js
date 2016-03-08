import { connect } from 'react-redux';
import React, { PropTypes, Component } from 'react';

import actions from '../actions';

class Nav extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="container">
                        <div className="nav-wrapper">
                          NAV
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}



export default Nav;
