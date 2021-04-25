import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './app-panel.css';

import PanelList from '../panel-list';
import IconButton from '../../button-icon';

class AppPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      panelVisible: true,
    };
  }

  handleClickButton() {
    const { panelVisible } = this.state;

    this.setState({
      panelVisible: !panelVisible,
    });
  }

  render() {
    const { panelVisible } = this.state;
    const {
      selectElementID, onClickChangeRemoveStatus, onClickAdd, onClickToggleHiddenPopupSelect,
      onClickChangePin, onClickToggleHiddenPopupInfo, onClockHiddenDevStatus
    } = this.props;

    return (
      <div className="panel">
        <IconButton icon="bi-list" onClick={() => this.handleClickButton()} />

        <PanelList
          selectElementID={selectElementID}
          onClickAdd={onClickAdd}
          onClickChangeRemoveStatus={onClickChangeRemoveStatus}
          onClickToggleHiddenPopupSelect={onClickToggleHiddenPopupSelect}
          onClickChangePin={onClickChangePin}
          onClickToggleHiddenPopupInfo={onClickToggleHiddenPopupInfo}
          onClockHiddenDevStatus={onClockHiddenDevStatus}
          display={panelVisible ? '' : ' panel-hidden'}
        />
      </div>
    );
  }
}

AppPanel.defaultProps = {
  selectElementID: 0,
};

AppPanel.propTypes = {
  selectElementID: PropTypes.number,
  onClickToggleHiddenPopupSelect: PropTypes.func.isRequired,
  onClickAdd: PropTypes.func.isRequired,
  onClickChangePin: PropTypes.func.isRequired,
  onClickToggleHiddenPopupInfo: PropTypes.func.isRequired,
  onClockHiddenDevStatus: PropTypes.func.isRequired
};

export default AppPanel;
