import { connect } from 'react-redux';
import React, { PropTypes, Component } from 'react';
import actions from '../actions';


class Home extends Component {
    render() {
        return (
            <div className="home">
                  <h1>Points: {this.props.points.currentValue}</h1>
            </div>
        );
    }
}

Home.propTypes = {
    points: PropTypes.object.isRequired,
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
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
