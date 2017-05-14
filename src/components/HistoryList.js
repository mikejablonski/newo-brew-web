import React from 'react';
import PropTypes from 'prop-types';
// import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

class HistoryList extends React.Component {
  constructor(props, context) {
    super(props, context);

  }

  componentDidMount() {
    this.props.getHistory('http://raspberrypi.local:3001/brewSessions');
  }

  componentWillUnmount() {
  }
  
  render() {
    const {brewHistory} = this.props;
    const listItems = brewHistory.data.map((item) =>
      <tr key={item.created}>
        <td>{item.name}</td>  
        <td>{item.created}</td>
      </tr>
    );
    
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
            <th>Session Name</th>
            <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {listItems}
          </tbody>
        </table>
      </div>
    );
  }
}

HistoryList.propTypes = {
  getHistory: PropTypes.func.isRequired,
  brewHistory: PropTypes.object.isRequired  
};

export default HistoryList;
