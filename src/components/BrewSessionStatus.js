import React from 'react';
import PropTypes from 'prop-types';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import FuelSavingsTextInput from './FuelSavingsTextInput';

class BrewSessionStatus extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.startStop = this.startStop.bind(this);
    this.refreshStatus = this.refreshStatus.bind(this);
    this.updateForm = this.updateForm.bind(this);
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.refreshStatus();
    }, 1000);

    this.refreshChart();
    this.chartTimer = setTimeout(() => {
      this.refreshChart();
    }, 10000);
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
    if (this.props.brewSessionStatus.isBrewSessionRunning) {
      this.props.getBrewSessionData('http://raspberrypi.local:3001/brewSession/' +
        this.props.brewSessionStatus.sessionName);
    }

    this.chartTimer = setTimeout(() => {
      this.refreshChart();
    }, 10000);
  }

  startStop() {
    if (this.props.brewSessionStatus.isBrewSessionRunning) {
      this.props.sendBrewSessionStartStop('http://raspberrypi.local:3001/brew/stop');
    }
    else {
      this.props.sendBrewSessionStartStop('http://raspberrypi.local:3001/brew/start',
        this.props.brewSessionStatus.sessionName,
        this.props.brewSessionStatus.mashTemp,
        this.props.brewSessionStatus.mashHoldTime);
    }
  }

  updateForm(name, value) {
    this.props.updateForm(name, value);    
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
              <label htmlFor="sessionName" className="col-sm-2 col-form-label" style={labelStyle}>Session Name</label>
              <div className="col-sm-4">
                <FuelSavingsTextInput name="sessionName" onChange={this.updateForm} value={brewSessionStatus.sessionName}/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="mashTemp" className="col-sm-2 col-form-label" style={labelStyle}>Target Mash Temp</label>
              <div className="col-sm-2">
                <FuelSavingsTextInput name="mashTemp" onChange={this.updateForm} value={brewSessionStatus.mashTemp}/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="mashHoldTime" className="col-sm-2 col-form-label" style={labelStyle}>Mash Hold Time</label>
              <div className="col-sm-2">
                <FuelSavingsTextInput name="mashHoldTime" onChange={this.updateForm} value={brewSessionStatus.mashHoldTime}/>
              </div>
            </div>
          </form>
        </div>
        {brewSessionStatus.isBrewSessionRunning && <input type="submit" className="btn btn-primary" value="Stop" onClick={this.startStop}/>}
        {!brewSessionStatus.isBrewSessionRunning && <input type="submit" className="btn btn-primary" value="Start" onClick={this.startStop}/>}
        <hr/>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={brewSessionStatus.data.mashTempData}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="formattedTime" />
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend />
            <Line type="monotone" dataKey="tempF" stroke="#8884d8" isAnimationActive={false} />
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
  brewSessionStatus: PropTypes.object.isRequired,
  updateForm: PropTypes.func.isRequired
};

export default BrewSessionStatus;
