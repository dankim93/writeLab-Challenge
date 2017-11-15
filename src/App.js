import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions/data_actions';
import PieGraph from './components/pie';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.receiveAll();
    // this.props.receive2015();
    // this.props.receive2016();
  }

  calculateTotalStudents() {
    let students = {
      "English 1A: Freshman Composition": 0,
      "English 1B: Argument & Analysis": 0,
      "English 1C: Applied Composition": 0
    };

    for(let i = 0; i < this.props.classes.length; i++) {
      students[this.props.classes[i].course] += this.props.classes[i].students;
    }

    return students;
  }

  renderData() {
    console.log(this.calculateTotalStudents())

  }

  render() {
    return (
      <section>

        <div>
          <input type="radio" name='year' onClick={this.props.receiveAll} />
          <input type="radio" name='year' onClick={this.props.receive2015}/>
          <input type="radio" name='year' onClick={this.props.receive2016}/>
        </div>

        <PieGraph classes={this.props.classes} students={this.calculateTotalStudents()}/>

        <div className="App">
          {this.renderData()}
        </div>

      </section>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
