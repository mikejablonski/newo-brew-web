import React from 'react';
import PropTypes from 'prop-types';

class TempStatus extends React.Component {
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
    this.props.getTemp('http://raspberrypi.local:3001/temp');

    this.timer = setTimeout(() => {
      this.refreshStatus();
    }, 1000);    
  }

  render() {
    const {brewSession} = this.props;

    return (
      <div>
        <p>Temperature: {brewSession.degreesF}</p>
      </div>
    );
  }
}

TempStatus.propTypes = {
  getTemp: PropTypes.func.isRequired,
  brewSession: PropTypes.object.isRequired
};

export default TempStatus;
