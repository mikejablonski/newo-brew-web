import React from 'react';
import PropTypes from 'prop-types';

class BrewSessionForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.refreshTemp = this.refreshTemp.bind(this);
  }

  refreshTemp() {
    this.props.getTemp();
  }

  render() {
    const {brewSession} = this.props;

    return (
      <div>
        <h2>Brew Session</h2>
        <p>Temperature: {brewSession.degreesF}</p>
        <input type="submit" value="Refresh" onClick={this.refreshTemp}/>
      </div>
    );
  }
}

BrewSessionForm.propTypes = {
  getTemp: PropTypes.func.isRequired,
  brewSession: PropTypes.object.isRequired
};

export default BrewSessionForm;
