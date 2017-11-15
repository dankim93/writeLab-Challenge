import React from 'react';
import {PieChart} from 'react-easy-chart';

class PieGraph extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <PieChart
        size={100}
        data={[
          { key: 'A', value: this.props.students[Object.keys(this.props.students)[0]], color: '#aaac84' },
          { key: 'B', value: this.props.students[Object.keys(this.props.students)[1]], color: '#dce7c5' },
          { key: 'C', value: this.props.students[Object.keys(this.props.students)[2]], color: '#e3a51a' }
        ]}
      />
    );
  }
}

export default PieGraph;
