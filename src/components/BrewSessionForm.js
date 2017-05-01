import React from 'react';
import PropTypes from 'prop-types';

class BrewSessionForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.refreshTemp = this.refreshTemp.bind(this);
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.refreshTemp();
    }, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }  

  refreshTemp() {
    this.props.getPumpStatus('http://raspberrypi.local:3001/pump');
    this.props.getHeaterStatus('http://raspberrypi.local:3001/heater');

    this.timer = setTimeout(() => {
      this.refreshTemp();
    }, 1000);    
  }

  render() {
    const {brewSession} = this.props;

    return (
      <div>
        <p>Pump Status: {brewSession.pumpStatus}</p>
        <p>Heater Status: {brewSession.heaterStatus}</p>
      </div>
    );
  }
}

BrewSessionForm.propTypes = {
  getPumpStatus: PropTypes.func.isRequired,
  getHeaterStatus: PropTypes.func.isRequired,
  brewSession: PropTypes.object.isRequired
};

export default BrewSessionForm;
