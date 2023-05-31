import React from 'react';
import PropTypes from 'prop-types';

const Keys = ({ onClick }) => {
  const handleClick = (buttonName) => {
    onClick(buttonName);
  };

  return (
    <div className="key-container grid">
      <button className="key-row" type="button" onClick={() => handleClick('AC')}>AC</button>
      <button className="key-row" type="button" onClick={() => handleClick('+/-')}>+/-</button>
      <button className="key-row" type="button" onClick={() => handleClick('%')}>%</button>
      <button className="key-row orange" type="button" onClick={() => handleClick('÷')}>÷</button>
      <button className="key-row" type="button" onClick={() => handleClick('7')}>7</button>
      <button className="key-row" type="button" onClick={() => handleClick('8')}>8</button>
      <button className="key-row" type="button" onClick={() => handleClick('9')}>9</button>
      <button className="key-row orange" type="button" onClick={() => handleClick('x')}>x</button>
      <button className="key-row" type="button" onClick={() => handleClick('4')}>4</button>
      <button className="key-row" type="button" onClick={() => handleClick('5')}>5</button>
      <button className="key-row" type="button" onClick={() => handleClick('6')}>6</button>
      <button className="key-row orange" type="button" onClick={() => handleClick('-')}>-</button>
      <button className="key-row" type="button" onClick={() => handleClick('1')}>1</button>
      <button className="key-row" type="button" onClick={() => handleClick('2')}>2</button>
      <button className="key-row" type="button" onClick={() => handleClick('3')}>3</button>
      <button className="key-row orange" type="button" onClick={() => handleClick('+')}>+</button>
      <button className="key-row" id="ceroKey" type="button" onClick={() => handleClick('0')}>0</button>
      <button className="key-row" type="button" onClick={() => handleClick('.')}>.</button>
      <button className="key-row orange" type="button" onClick={() => handleClick('=')}>=</button>
    </div>
  );
};

Keys.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Keys;
