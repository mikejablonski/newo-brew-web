import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/historyListActions';
import HistoryList from '../components/HistoryList';

export const HistoryPage = (props) => {
  return (
    <HistoryList
      getHistory={props.actions.getHistory}
      brewHistory={props.brewHistory} />
  );
};

HistoryPage.propTypes = {
  actions: PropTypes.object.isRequired,
  brewHistory: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    brewHistory: state.brewHistory
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryPage);
