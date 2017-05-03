import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      /*<div>
        <IndexLink to="/">Home</IndexLink>
        {' | '}
        <Link to="/brew">Brew</Link>
        {' | '}
        <Link to="/fuel-savings">Recipes</Link>
        {' | '}
        <Link to="/about">History</Link>
        <br/>
        {this.props.children}
      </div>*/
      <div className="container-fluid">
        <ul className="nav nav-tabs">
          <li role="presentation"><Link to="/brew">Brew</Link></li>
          <li role="presentation"><Link to="/about">History</Link></li>
        </ul>      

        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
