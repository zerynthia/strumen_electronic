import React  from 'react';
import './app-layout.css';
import PropTypes from 'prop-types';

import LogicGate from '../logic-gate';
import LogicLine from "../logic-line";

function AppLayout(props) {
  const { items, onClickSetSelectElementID, selectElementID } = props;

  const layoutListGrid = items.map((item) => {
    if(item.group === 'gate') {
      const { id, type, x, y, pin } = item;
      const elementSelectStatus = (selectElementID === id)

      return (
        <div className="logic-gate-container" key={id}>
          <LogicGate
            id={id}
            logic={type}
            x={x} y={y}
            pin={pin}
            onClickSetSelectElementID={onClickSetSelectElementID}
            selectElementID={selectElementID}
            selectStatus={elementSelectStatus}
          />
        </div>
      );
    }
  });
  const layoutListLine = items.map((item) => {
    if (item.group === 'line') {
      const {id, type, x, y, pin, width, height, turn} = item;
      const elementSelectStatus = (selectElementID === id)

      return (
        <div className="logic-gate-container" key={id}>
          <LogicLine
            id={id}
            logic={type}
            x={x} y={y}
            width={width}
            height={height}
            turn={turn}
            pin={pin}
            onClickSetSelectElementID={onClickSetSelectElementID}
            selectElementID={selectElementID}
            selectStatus={elementSelectStatus}
          />
        </div>
      );
    }
  })

  return (
    <div className="app-layout">
      <div className="background-layout" onClick={() => onClickSetSelectElementID(0)} />
      {layoutListGrid}
      {layoutListLine}
    </div>
  );
}

AppLayout.propTypes = {
  selectElementID: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
  onClickSetSelectElementID: PropTypes.func.isRequired
};

export default AppLayout;
