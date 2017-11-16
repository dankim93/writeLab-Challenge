import React from 'react';
import {PieChart} from 'react-easy-chart';
import Grid from './grid';

class PieGraph extends React.Component {
  state = {
    clicked: false,
    courseName: ""
  };

  renderGrid() {
    if (this.state.clicked) {
      return (<Grid courseName={this.state.courseName}/>);
    }
  }

  render() {
    return(
      <section className="pie-grid">
        <div className="pie">
          <PieChart
          size={400}
          data={[
            { key: 'English 1A: Freshman Composition', value: this.props.students[Object.keys(this.props.students)[0]], color: '#aaac84' },
            { key: 'English 1B: Argument & Analysis', value: this.props.students[Object.keys(this.props.students)[1]], color: '#dce7c5' },
            { key: 'English 1C: Applied Composition', value: this.props.students[Object.keys(this.props.students)[2]], color: '#e3a51a' }
          ]}
          clickHandler={
            (d) => {
              this.setState({
                clicked: true,
                courseName: d.data.key
              });
            }
          }
          />
          <div className="boxes">
            <div className="box C"></div>
            <label>English 1C: Applied Composition</label>
            <br/>
            <div className="box B"></div>
            <label>English 1B: Argument & Analysis</label>
            <br/>
            <div className="box A"></div>
            <label>English 1A: Freshman Composition</label>
          </div>
        </div>
        <div>
          {this.renderGrid()}
        </div>

      </section>
    );
  }
}

export default PieGraph;
