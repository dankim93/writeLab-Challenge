import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/data_actions';

class Grid extends React.Component {
  render() {
    return(
      <div>{this.props.courseName}</div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({...actions}, dispatch);
};

const mapStateToProps = ({classes}) => {
  return {
    classes: classes
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
