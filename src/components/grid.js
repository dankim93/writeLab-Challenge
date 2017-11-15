import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/data_actions';

class Grid extends React.Component {
  state = {
    data: {}
  }

  collectGridData() {
    // let data = {};
    this.state.data = {};
    for (let i = 0; i < this.props.classes.length; i++) {

      if (this.state.data[this.props.classes[i].instructor] >= 0 && this.props.classes[i].course === this.props.courseName) {
        this.state.data[this.props.classes[i].instructor] += this.props.classes[i].students;
      } else if (this.state.data[this.props.classes[i].instructor] === undefined && this.props.classes[i].course === this.props.courseName) {
        this.state.data[this.props.classes[i].instructor] = this.props.classes[i].students;
      }

    }

    console.log(this.state.data);
  }



  render() {
    this.collectGridData();
    return(
      <div>
        {this.props.courseName}
      </div>
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
