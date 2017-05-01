import React from 'react';
import PropTypes from 'prop-types';

class BrewSessionStatus extends React.Component {
  constructor(props, context) {
    super(props, context);

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

  render() {
    const {brewSessionStatus} = this.props;

    return (
      <div>
        <p>Brew Session Running: {brewSessionStatus.isBrewSessionRunning.toString()}</p>
      </div>
    );
  }
}

BrewSessionStatus.propTypes = {
  getIsBrewSessionRunning: PropTypes.func.isRequired,
  brewSessionStatus: PropTypes.object.isRequired
};

export default BrewSessionStatus;
