import { connect } from 'react-redux';
import { Navigation } from 'react-router';
import React, { PropTypes } from 'react';
import Nav from './nav';

class Wrap extends React.Component {

    render() {
        return (
            <div>
                <Nav/>
                <div className="container">
                       {this.props.children}
                </div>
            </div>
        );
    }
}

Wrap.propTypes = {
   points: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
     points: state.points,
 };
};

export default connect(mapStateToProps)(Wrap);
