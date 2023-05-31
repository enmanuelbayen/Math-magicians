import React from 'react';
import PropTypes from 'prop-types';

const Keys = ({ onClick }) => (
  <div className="key-container grid">
    <button className="key-row" type="button" onClick={() => onClick('AC')}>AC</button>
    <button className="key-row" type="button" onClick={() => onClick('+/-')}>+/-</button>
    <button className="key-row" type="button" onClick={() => onClick('%')}>%</button>
    <button className="key-row orange" type="button" onClick={() => onClick('÷')}>÷</button>
    <button className="key-row" type="button" onClick={() => onClick('7')}>7</button>
    <button className="key-row" type="button" onClick={() => onClick('8')}>8</button>
    <button className="key-row" type="button" onClick={() => onClick('9')}>9</button>
    <button className="key-row orange" type="button" onClick={() => onClick('x')}>x</button>
    <button className="key-row" type="button" onClick={() => onClick('4')}>4</button>
    <button className="key-row" type="button" onClick={() => onClick('5')}>5</button>
    <button className="key-row" type="button" onClick={() => onClick('6')}>6</button>
    <button className="key-row orange" type="button" onClick={() => onClick('-')}>-</button>
    <button className="key-row" type="button" onClick={() => onClick('1')}>1</button>
    <button className="key-row" type="button" onClick={() => onClick('2')}>2</button>
    <button className="key-row" type="button" onClick={() => onClick('3')}>3</button>
    <button className="key-row orange" type="button" onClick={() => onClick('+')}>+</button>
    <button className="key-row" id="ceroKey" type="button" onClick={() => onClick('0')}>0</button>
    <button className="key-row" type="button" onClick={() => onClick('.')}>.</button>
    <button className="key-row orange" type="button" onClick={() => onClick('=')}>=</button>
  </div>
);

Keys.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Keys;
