import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/data_actions';
import { Table } from 'semantic-ui-react'

class Grid extends React.Component {
  state = {
    data: {
      2015: {},
      2016: {}
    }
  }

  collectGridData() {
    this.state = {
      data: {
        2015: {},
        2016: {}
      }
    };
    let classes = this.props.classes;

    if(classes[0].year === 2015 && classes[classes.length-1].year === 2016) {
      for (let i = 0; i < classes.length; i++) {
        if (classes[i].year === 2015 && this.state.data[2015][classes[i].instructor] >= 0 && classes[i].course === this.props.courseName) {
          this.state.data[2015][classes[i].instructor] += classes[i].students;
        } else if (classes[i].year === 2015 && this.state.data[2015][classes[i].instructor] === undefined && classes[i].course === this.props.courseName) {
          this.state.data[2015][classes[i].instructor] = classes[i].students;
        } else if (classes[i].year === 2016 && this.state.data[2016][classes[i].instructor] >= 0 && classes[i].course === this.props.courseName) {
          this.state.data[2016][classes[i].instructor] += classes[i].students;
        } else if (classes[i].year === 2016 && this.state.data[2016][classes[i].instructor] === undefined && classes[i].course === this.props.courseName) {
          this.state.data[2016][classes[i].instructor] = classes[i].students;
        }
      }

    } else if (classes[0].year === 2015) {
      for (let i = 0; i < classes.length; i++) {
        if (this.state.data[2015][classes[i].instructor] >= 0 && classes[i].course === this.props.courseName) {
          this.state.data[2015][classes[i].instructor] += classes[i].students;
        } else if (this.state.data[2015][classes[i].instructor] === undefined && classes[i].course === this.props.courseName) {
          this.state.data[2015][classes[i].instructor] = classes[i].students;
        }
      }

    } else if (classes[0].year === 2016) {
      for (let i = 0; i < classes.length; i++) {
        if (this.state.data[2016][classes[i].instructor] >= 0 && classes[i].course === this.props.courseName) {
          this.state.data[2016][classes[i].instructor] += classes[i].students;
        } else if (this.state.data[2016][classes[i].instructor] === undefined && classes[i].course === this.props.courseName) {
          this.state.data[2016][classes[i].instructor] = classes[i].students;
        }
      }
    }
    console.log(this.state.data);
  }

  average(arr) {
    return arr.reduce((p,c) => p + c, 0) / arr.length;
  }


  makeGrids() {
    let classes = this.props.classes;
    if(classes[0].year === 2015 && classes[classes.length-1].year === 2016) {
      // if(this.average(Object.values(this.state.data[2015]))
      let mean = this.average(Object.values(this.state.data[2015]).concat(Object.values(this.state.data[2016])));
      let test =
        Object.keys(this.state.data[2015]).map((instructor, id) => (
          <Table.Row key={id}>
            <Table.Cell>2015</Table.Cell>
            <Table.Cell>{this.props.courseName}</Table.Cell>
            <Table.Cell>{instructor}</Table.Cell>
            {this.state.data[2015][instructor] < mean ?
              <Table.Cell><b>{this.state.data[2015][instructor]}</b></Table.Cell> : <Table.Cell>{this.state.data[2015][instructor]}</Table.Cell>}
          </Table.Row>
        )).concat(
          Object.keys(this.state.data[2016]).map((instructor, id) => (
            <Table.Row key={id + 4}>
              <Table.Cell>2016</Table.Cell>
              <Table.Cell>{this.props.courseName}</Table.Cell>
              <Table.Cell>{instructor}</Table.Cell>
              {this.state.data[2016][instructor] < mean ?
                <Table.Cell><b>{this.state.data[2016][instructor]}</b></Table.Cell> : <Table.Cell>{this.state.data[2016][instructor]}</Table.Cell>}
            </Table.Row>
          ))
        );
      return(
        test
      );
    } else if(classes[0].year === 2015) {
      let mean = this.average(Object.values(this.state.data[2015]));
      return(
        Object.keys(this.state.data[2015]).map((instructor, id) => (
          <Table.Row key={id}>
            <Table.Cell>2015</Table.Cell>
            <Table.Cell>{this.props.courseName}</Table.Cell>
            <Table.Cell>{instructor}</Table.Cell>
            {this.state.data[2015][instructor] < mean ?
              <Table.Cell><b>{this.state.data[2015][instructor]}</b></Table.Cell> : <Table.Cell>{this.state.data[2015][instructor]}</Table.Cell>}
          </Table.Row>
        ))
      );
    } else if(classes[0].year === 2016) {
      let mean = this.average(Object.values(this.state.data[2016]));
      return(
        Object.keys(this.state.data[2016]).map((instructor, id) => (
          <Table.Row key={id}>
            <Table.Cell>2016</Table.Cell>
            <Table.Cell>{this.props.courseName}</Table.Cell>
            <Table.Cell>{instructor}</Table.Cell>
            {this.state.data[2016][instructor] < mean ?
              <Table.Cell><b>{this.state.data[2016][instructor]}</b></Table.Cell> : <Table.Cell>{this.state.data[2016][instructor]}</Table.Cell>}
          </Table.Row>
        ))
      );
    }
  }



  render() {
    this.collectGridData();
    return(
      <Table celled fixed singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Year</Table.HeaderCell>
            <Table.HeaderCell>Course</Table.HeaderCell>
            <Table.HeaderCell>Instructor</Table.HeaderCell>
            <Table.HeaderCell>Students</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.makeGrids()}
        </Table.Body>
      </Table>

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
