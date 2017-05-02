import React from 'react';
import PropTypes from 'prop-types';

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

    return (
      <div>
        <h2>Brew Session</h2>
        <p>Brew Session Running: {brewSessionStatus.isBrewSessionRunning.toString()}</p>
        {brewSessionStatus.isBrewSessionRunning && <input type="submit" value="Stop" onClick={this.startStop}/>}
        {!brewSessionStatus.isBrewSessionRunning && <input type="submit" value="Start" onClick={this.startStop}/>}
      </div>
    );
  }
}

BrewSessionStatus.propTypes = {
  getIsBrewSessionRunning: PropTypes.func.isRequired,
  sendBrewSessionStartStop: PropTypes.func.isRequired,
  brewSessionStatus: PropTypes.object.isRequired
};

export default BrewSessionStatus;
