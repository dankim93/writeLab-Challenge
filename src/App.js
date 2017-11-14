import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './App.css';
import * as actions from './actions/data_actions';

class App extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    // this.props.receiveAll();
    this.props.receive2015();
    // this.props.receive2016();
  }



  renderData() {
    // if (this.props.classes[0]) { console.log(this.props.classes[0].year) }
    console.log(this.props.classes);
    // return(
      // this.props.classes.map(clas => (
      //   <li>
      //     {clas.year}
      //   </li>
      // ))
    // )
  }

  render() {
    return (
      <section>

        <div>
          <input type="radio" name='year' onClick={this.props.receiveAll} />
          <input type="radio" name='year' onClick={this.props.receive2015}/>
          <input type="radio" name='year' onClick={this.props.receive2016}/>
        </div>

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
