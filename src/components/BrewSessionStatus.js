import React from 'react';
import PropTypes from 'prop-types';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

class BrewSessionStatus extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.startStop = this.startStop.bind(this);
    this.refreshStatus = this.refreshStatus.bind(this);
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.refreshStatus();
    }, 1000);

    this.refreshChart();
    this.chartTimer = setTimeout(() => {
      this.refreshChart();
    }, 30000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  refreshStatus() {
    this.props.getIsBrewSessionRunning('http://raspberrypi.local:3001/brew');

    this.timer = setTimeout(() => {
      this.refreshStatus();
    }, 1000);    
  }

  refreshChart() {
    this.props.getBrewSessionData('http://raspberrypi.local:3001/brewSession/REACT_TEST');

    this.chartTimer = setTimeout(() => {
      this.refreshChart();
    }, 30000);
  }

  startStop() {
    if (this.props.brewSessionStatus.isBrewSessionRunning) {
      this.props.sendBrewSessionStartStop('http://raspberrypi.local:3001/brew/stop');
    }
    else {
      this.props.sendBrewSessionStartStop('http://raspberrypi.local:3001/brew/start');
    }
  }

  render() {
    const {brewSessionStatus} = this.props;
    const labelStyle = {
      float: 'left',
      'paddingRight': '6px'
    };
    
    return (
      <div>
        <p>Brew Session Running: {brewSessionStatus.isBrewSessionRunning.toString()}</p>
        <div className="">
          <form>
            <div className="form-group row">
              <label htmlFor="brewSessionName" className="col-sm-2 col-form-label" style={labelStyle}>Session Name</label>
              <div className="col-sm-4">
                <input type="text" className="form-control" name="brewSessionName"/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="targetMashTemp" className="col-sm-2 col-form-label" style={labelStyle}>Target Mash Temp</label>
              <div className="col-sm-2">
                <input type="text" className="form-control" name="targetMashTemp"/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="mashTime" className="col-sm-2 col-form-label" style={labelStyle}>Mash Hold Time</label>
              <div className="col-sm-2">
                <input type="text" className="form-control" name="mashTime"/>
              </div>
            </div>
          </form>
        </div>
        {brewSessionStatus.isBrewSessionRunning && <input type="submit" value="Stop" onClick={this.startStop}/>}
        {!brewSessionStatus.isBrewSessionRunning && <input type="submit" value="Start" onClick={this.startStop}/>}
        <hr/>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={brewSessionStatus.data.mashTempData}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="time" tickFormatter={dateFormater}/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend />
            <Line type="monotone" dataKey="temp" stroke="#8884d8" isAnimationActive={false} activeDot={{r: 8}}/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

BrewSessionStatus.propTypes = {
  getIsBrewSessionRunning: PropTypes.func.isRequired,
  getBrewSessionData: PropTypes.func.isRequired,
  sendBrewSessionStartStop: PropTypes.func.isRequired,
  brewSessionStatus: PropTypes.object.isRequired
};

function dateFormater(ticks) {
  return new Date(ticks).toLocaleTimeString();
}

export default BrewSessionStatus;
