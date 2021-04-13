import React from 'react';
import './logic-gate.css';
import PropTypes from 'prop-types';

import Draggable from 'react-draggable';

function LogicGate(props) {
  const {
    id, logic, x, y, onClickSetSelectElementID,
  } = props;

  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions,no-shadow
    <div className="position-absolute logic-gate-container" key={id} onClick={() => { onClickSetSelectElementID(id); }}>
      <Draggable defaultPosition={{ x, y }} handle=".handle">
        <div className="logic-gate">
          <div className="circle circle-left" />
          <div className="handle" />
          <select className="form-select logic-gate-select" defaultValue={logic}>
            <option value="OR">OR</option>
            <option value="AND">AND</option>
            <option value="AND">NOT</option>
            <option value="AND">NOR</option>
            <option value="NAND">NAND</option>
            <option value="XOR">XOR</option>
            <option value="XNOR">XNOR</option>
          </select>
          <div className="circle circle-right" />
        </div>
      </Draggable>
    </div>
  );
}

LogicGate.propTypes = {
  id: PropTypes.number.isRequired,
  logic: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  onClickSetSelectElementID: PropTypes.func.isRequired,
};

export default LogicGate;
