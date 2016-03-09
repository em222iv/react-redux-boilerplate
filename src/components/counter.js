import { connect } from 'react-redux';
import React, { PropTypes, Component } from 'react';
import actions from '../actions';

class Counter extends Component {
    render() {
        return (
            <div className="counter">
                  <h1>Points: {this.props.points.currentValue}</h1>
                  <a onClick={this.props.increase}>CLICK! CLICK FOR GODS SAKES!!!</a>
            </div>
        );
    }
}

Counter.propTypes = {
    points: PropTypes.object.isRequired,
    increase: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        points: state.points
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increase: () => {
            dispatch(actions.pointsIncrease());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
